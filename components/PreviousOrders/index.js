import React, { Component } from "react";
import { observer } from "mobx-react";
import { Content, List } from "native-base";

// NativeBase Components
import { withNavigation } from "react-navigation";

// Store
import CartStore from "../../stores/cartStore";

// import ProductItem from "../ProductItem";
import items from "../data";
import authStore from "../../stores/authStore";
import CartButton from "../CartButton";

class PreviousOrder extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Previous Orders",

    headerRight: <CartButton route="Cart" />
  });

  render() {
    let previousOrders;
    if (authStore.user) {
      CartStore.fetchPreviousOrders();
      previousOrders = CartStore.previousOrders;
    }
    console.log("PREVIOUS ORDERS", previousOrders);
    return <Content>{<List>{previousOrders}</List>}</Content>;
  }
}

export default withNavigation(observer(PreviousOrder));
