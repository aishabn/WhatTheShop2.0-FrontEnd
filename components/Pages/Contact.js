import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import CartButton from "../CartButton";

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
  Right
} from "native-base";
class Contact extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Contact",
    headerRight: <CartButton route="Cart" />
  });
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active type="SimpleLineIcons" name="phone" />
              <Text>+965 99955798</Text>
            </CardItem>
            <CardItem>
              <Icon active type="Entypo" name="email" />
              <Text>app@sportinggoods.com</Text>
            </CardItem>
            <CardItem>
              <Icon active type="AntDesign" name="instagram" />
              <Text>TheBestOnlineShopInTown</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Contact);
