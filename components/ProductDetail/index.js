import React, { Component } from "react";
import { observer } from "mobx-react";

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
  Content
} from "native-base";

// Style

//Store

// Components

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }
  //   static navigationOptions = ({ navigation }) => ({
  //     title: navigation.getParam("item", {}).name
  //     // headerRight: <Quantity route="Cart" />
  //   });

  //   changeQuantity(value) {
  //     this.setState({
  //       quantity: value
  //     });
  //   }

  //   handleAdd() {
  //     const { quantity } = this.state;
  //     let item = {
  //       quantity: quantity
  //     };
  //     CartStore.addItemToCart(item);
  //   }

  render() {
    const itemDetail = this.props.navigation.getParam("itemDetail", {});

    return (
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
            <Left>
              {/* <Picker
               note
               mode="dropdown"
               selectedValue={this.state.quantity}
               onValueChange={this.changeQuantity.bind(this)}
             >
               <Picker.Item label="1" value="1" />
               <Picker.Item label="2" value="2" />
               <Picker.Item label="3" value="3" />
             </Picker> */}
            </Left>
          </ListItem>
          <Button full danger onPress={() => this.handleAdd()}>
            <Text>Add</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default observer(ProductDetail);
