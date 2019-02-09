import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";
import { withNavigation } from "react-navigation";

// Store
import CartStore from "../../stores/cartStore";

// Component
// import ProductItem from "../ProductItem";

import items from "../data";
import CartButton from "../CartButton";

class PreviousOrder extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Previous Orders",

    headerRight: <CartButton route="Cart" />
  });

  componentDidMount() {
    return CartStore.fetchOrders();
  }

  render() {
    return {
      /* <Content>
        <List>{ListItems}</List>
      </Content> */
    };
  }
}

export default withNavigation(observer(PreviousOrder));
