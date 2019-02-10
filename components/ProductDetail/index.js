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
          <List>
            <ListItem>
              <Left>
                <Text>
                  {itemDetail.name + "\n"}
                  <Text note>{itemDetail.description}</Text>
                </Text>
              </Left>
              <Body />
              <Right>
                <Thumbnail bordered source={{ uri: itemDetail.img }} />
              </Right>
            </ListItem>
            <ListItem>
              <Left />
            </ListItem>
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
          </List>
        </Content>
      </Root>
    );
  }
}

export default observer(ProductDetail);
