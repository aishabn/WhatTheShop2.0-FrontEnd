import { decorate, observable, action, computed } from "mobx";
import { Toast } from "native-base";
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/"
  baseURL: "http://207.154.255.247/"
});

class CartStore {
  constructor() {
    this.cartItems = [];
    this.showToast = false;
    this.previousOrders = [];
    this.fetchOrders();
  }

  fetchOrders() {
    instance
      .get("api/order")
      .then(res => res.data)
      .then(order => (this.previousOrders = order))
      .catch(err => console.error(err));
  }

  checkoutCart() {
    instance
      .post("api/order/create/", this.cartItems)
      .then(res => res.data)
      .then(order => {
        this.previousOrders.push(order);
        this.cartItems = [];
        alert("order received!");
      })
      .catch(err => console.error(err));
  }

  cartItemCreate(cartItem) {
    instance
      .post("api/item/", cartItem)
      .then(res => res.data)
      .then(item => {
        this.addItemToCart(item)
      })
      .catch(err => console.error(err));
  }

  addItemToCart(item) {
    const foundItem = this.cartItems.find(
      cartItem => cartItem.name === item.name && cartItem.price === item.price
    );
    if (foundItem) {
      foundItem.quantity += item.quantity;
      Toast.show({
        text: `${foundItem.name} has been added to the list`,
        buttonText: "Okay",
        duration: 3000
      });
    } else {
      this.cartItems.push({item);
      Toast.show({
        text: `${item.name} has been added to the list`,
        buttonText: "Okay",
        duration: 3000
      });
    }
  }

  removeItemFromCart(item) {
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
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed,
  total: computed
});

export default new CartStore();
