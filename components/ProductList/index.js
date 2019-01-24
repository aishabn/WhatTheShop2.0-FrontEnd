import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
// import productStore from "../../store/ProductStore";

// Component
import ProductItem from "./ProductItem";
import items from "../data";

class ProductList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Product List",
    headerLeft: null,
    headerRight: null
  });

  render() {
    const productList = this.props.navigation.getParam("categoryItem", {});

    let ListItems;
    if (productList) {
      ListItems = productList.products.map(product => (
        <ProductItem product={product} key={product.id} />
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
