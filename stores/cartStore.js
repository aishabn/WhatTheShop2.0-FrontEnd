import { decorate, observable, action, computed } from "mobx";
import { Toast } from "native-base";
import axios from "axios";

const instance = axios.create({
  baseURL: "http://207.154.255.247/"
});

class CartStore {
  constructor() {
    this.list = [];
    this.showToast = false;
  }

  fetchOrders() {
    instance
      .get("api/order")
      .then(res => res.data)
      .then(order => (this.order = order));
  }

  postOrder(newOrder) {
    instance
      .post("api/order/create/", newOrder)
      .then(res => res.data)
      .then(order => {
        this.list.push(order);
        // this.loading = false;
      })
      .catch(err => console.error(err));
  }

  addItemToCart(item) {
    const foundItem = this.list.find(
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
      this.list.push(item);
      Toast.show({
        text: `${item.name} has been added to the list`,
        buttonText: "Okay",
        duration: 3000
      });
    }
  }

  removeItemFromCart(item) {
    this.list = this.list.filter(cartItem => cartItem !== item);
  }

  checkoutCart() {
    this.list = [];
    alert("order received!");
  }
  get quantity() {
    let quantity = 0;
    this.list.forEach(item => (quantity = quantity + item.quantity));
    return quantity;
  }
  get total() {
    let total = 0;
    this.list.forEach(item => (total += item.price * item.quantity));
    return total;
  }
}

decorate(CartStore, {
  list: observable,
  addItemToCart: action,
  removeItemFromCart: action,
  checkoutCart: action,
  quantity: computed,
  total: computed
});

export default new CartStore();
