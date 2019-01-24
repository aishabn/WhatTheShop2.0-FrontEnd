import { decorate, observable, computed } from "mobx";
import axios from "axios";

class ProductStore {
  constructor() {
    this.products = null;
    this.total = 0;
    this.loading = true;
    this.fetchAllProducts();
  }

  fetchAllProducts() {
    axios
      .get("")
      .then(res => res.data)
      .then(products => {
        this.products = products;
        this.loading = false;
      })
      .catch(err => console.error(err));
  }
}

decorate(CoffeeStore, {
  total: computed,
  products: observable,
  loading: observable
});

export default new ProductStore();
