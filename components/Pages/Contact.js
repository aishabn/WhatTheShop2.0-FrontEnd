import React, { Component } from "react";
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
export default class Contact extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>+965 99955798</Text>
            </CardItem>
            <CardItem>
              <Icon active name="logo-googleplus" />
              <Text>app@sportinggoods.com</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
