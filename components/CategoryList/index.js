import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
// import productStore from "../../store/ProductStore";

// Component
import CategoryItem from "./CategoryItem";
import items from "../data";
import CartButton from "../CartButton";
// import CartStore from "../../stores/cartStore";
import ProductStore from "../../stores/ProductStore";

class CategoryList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Category List",

    headerRight: <CartButton route="Cart" />
  });
  render() {
    const products = ProductStore.products;
    let CategoryList;
    CategoryList = products.map(product => (
      <CategoryItem product={product} key={product.id} />
    ));
    return (
      <Content>
        <List>{CategoryList}</List>
      </Content>
    );
  }
}

export default observer(CategoryList);
