import { decorate, observable, action, computed } from "mobx";
import { Toast } from "native-base";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://207.154.255.247/"
});

class CartStore {
  constructor() {
    this.cartItems = [];
    this.showToast = false;
    this.previousOrders = [];
    // this.fetchPreviousOrders();
  }

  fetchPreviousOrders() {
    instance
      .get("api/order/")
      .then(res => res.data)
      .then(order => (this.previousOrders = order))
      .catch(err => console.log(err));
  }

  checkoutCart() {
    //change Order status in backend
    //True = Active
    //False = Closed

    instance
      .get("api/checkout/")
      .then(res => res.data)
      .then(() => {
        this.cartItems.forEach(item => this.previousOrders.push(item));
      })
      .then((this.cartItems = []))
      .then(alert("order received!"))
      .catch(err => {
        console.log(err);
        Toast.show({
          text: "You have to login first :)",
          buttonText: "Okay",
          duration: 7000
        });
      });
  }

  apiCartCreate(cartItem) {
    console.log("Cart Item: ", cartItem);
    //converts the product to a CartItem and generates an order if its a new order, or adds the product to an existing order
    instance
      .post("api/create/item", cartItem)
      .then(res => res.data)
      .then(item => {
        console.log("ITEM COMING BACK FROM API", item);
      })
      //use for invalid authentication
      .catch(err => {
        console.log(err.response.data);
      });
  }

  addItemToCart(item) {
    const foundItem = this.cartItems.find(
      cartItem => cartItem.name === item.name && cartItem.price === item.price
    );
    if (foundItem) {
      foundItem.quantity += item.quantity;
      console.log("CART ITEMS 1: ", this.cartItems);
      this.apiCartCreate({ item: foundItem.id, quantity: foundItem.quantity });
    } else {
      this.cartItems.push(item);
      console.log("CART ITEMS 2: ", this.cartItems);
      this.apiCartCreate({ item: item.id, quantity: item.quantity });
    }
    Toast.show({
      text: `${item.quantity} ${item.name} has been added to the list`,
      buttonText: "Okay",
      duration: 3000
    });
  }

  removeItemFromCart(item) {
    //every time the user deletes an item, implement destroy api view to delete it from the backend
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  get quantity() {
    let quantity = 0;
    this.cartItems.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }
  get total() {
    let total = 0;
    this.cartItems.forEach(item => (total += item.price * item.quantity));
    return total;
  }
}

decorate(CartStore, {
  cartItems: observable,
  previousOrders: observable,
  apiCartCreate: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed,
  total: computed
});

export default new CartStore();
