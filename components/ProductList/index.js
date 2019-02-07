import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
// import productStore from "../../store/ProductStore";

// Component
import ProductItem from "./ProductItem";
import items from "../data";
import CartButton from "../CartButton";
import ProductStore from "../../stores/ProductStore";

class ProductList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Product List",

    headerRight: <CartButton route="Cart" />
  });

  render() {
    const productList = this.props.navigation.getParam("categoryItem", {});

    let ListItems;
    if (productList) {
      ListItems = productList.products.map(product => (
        <ProductItem
          product={product}
          key={product.id}
          navigation={this.props.navigation}
        />
      ));
    }
    return (
      <Content>
        <List>{ListItems}</List>
      </Content>
    );
  }
}

export default observer(ProductList);
