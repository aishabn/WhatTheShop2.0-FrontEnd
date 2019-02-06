import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";
// Component
import CartItem from "./CartItem";
//Store
import CartStore from "../../stores/cartStore";

class ShopCart extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Cart"
  });
  render() {
    const cartItems = CartStore.cartItems;
    let content;
    if (cartItems) {
      content = cartItems.map(item => <CartItem item={item} key={item.id} />);
    }

    return (
      <List>
        {content}
        <Text>Total: {CartStore.total}</Text>
        <Button full bordered danger onPress={() => CartStore.checkoutCart()}>
          <Text>Checkout</Text>
        </Button>
      </List>
    );
  }
}

export default observer(ShopCart);
