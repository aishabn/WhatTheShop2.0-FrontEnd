import { decorate, observable, computed } from "mobx";
import axios from "axios";
import { Toast } from "native-base";

const instance = axios.create({
  baseURL: "http://207.154.255.247"
  // baseURL: "http://127.0.0.1:8000/"
});

class ProductStore {
  constructor() {
    this.products = [];
    // this.loading = true;
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    instance
      .get("api/list/")
      .then(res => res.data)
      .then(product => {
        this.products = product;
        // this.loading = false;
        console.log(product);
      })
      .catch(err => console.log(err));
  }
}

decorate(ProductStore, {
  products: observable
  // loading: observable
});

export default new ProductStore();
