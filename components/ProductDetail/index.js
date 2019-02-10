import React, { Component } from "react";
import { observer } from "mobx-react";
import NumericInput from "react-native-numeric-input";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Picker,
  Content,
  Toast,
  Root,
  Row,
  Input
} from "native-base";

import { Image } from "react-native";

// Style

//Store

// Components
import CartButton from "../CartButton";
import CartStore from "../../stores/cartStore";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("item", {}).name,
    headerRight: <CartButton route="Cart" />
  });

  handleAdd() {
    const quantity = this.state.quantity;
    const item = this.props.navigation.getParam("itemDetail", {});
    let newItem = {
      ...item,
      quantity: quantity
    };
    CartStore.addItemToCart(newItem);
  }

  render() {
    const itemDetail = this.props.navigation.getParam("itemDetail", {});
    console.log(this.state.quantity);
    return (
      <Root>
        <Content>
          <Left>
            <Text>
              {itemDetail.name + "\n"}
              <Text note>{itemDetail.description}</Text>
            </Text>
          </Left>
          <Body />
          <Image
            bordered
            source={{ uri: itemDetail.img }}
            style={{ width: 300, height: 300 }}
          />

          <NumericInput
            type="plus-minus"
            maxValue={10}
            minValue={1}
            step={1}
            valueType="integer"
            editable={false}
            initValue={this.state.quantity}
            value={this.state.quantity}
            onChange={value => this.setState({ quantity: value })}
          />

          <Button full danger onPress={() => this.handleAdd()}>
            <Text>Add</Text>
          </Button>
        </Content>
      </Root>
    );
  }
}

export default observer(ProductDetail);
