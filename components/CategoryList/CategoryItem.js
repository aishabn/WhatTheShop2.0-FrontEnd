import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

import items from "../data";

class CategoryItem extends Component {
  handlePress() {
    this.props.navigation.navigate("ProductListScreen", {
      categoryItem: this.props.item
    });
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.props.item.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: this.props.item.img }}
                style={{ height: 200, width: null, flex: 1 }}
              />
              <Button onPress={() => this.handlePress()}>
                <Text>PRESS</Text>
              </Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(CategoryItem);
