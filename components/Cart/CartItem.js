import React, { Component } from "react";

// NativeBase Components
import { Text, Left, Body, Right, Button, ListItem, Icon } from "native-base";
import CartStore from "../../stores/cartStore";

// const CartItem = props => (
class CartItem extends Component {
  render() {
    return (
      <ListItem>
        <Left>
          <Text>{this.props.item.name}</Text>
        </Left>
        <Text>{this.props.item.price}</Text>
        <Body>
          <Text>{this.props.item.quantity}</Text>
        </Body>
        <Right>
          <Button
            transparent
            onPress={() => CartStore.removeItemFromCart(this.props.item)}
          >
            <Icon name="trash" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default CartItem;
