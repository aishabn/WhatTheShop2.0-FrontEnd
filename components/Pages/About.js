import React, { Component } from "react";
import { Image } from "react-native";
import { withNavigation } from "react-navigation";
import CartButton from "../CartButton";
// import field from "../media/field.jpg";
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
  Body
} from "native-base";
class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "About",
    headerRight: <CartButton route="Cart" />
  });
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={{ uri: "Image URL" }} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>Sporting Goods</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: "https://unsplash.com/photos/52p1K0d0euM" }}
                  style={{ height: 200, width: 200, flex: 1 }}
                />
                <Text>
                  Welcome to our shop! Now you are part of our family. We are
                  proud to say that we worked extremely hard on our online shop
                  for three long weeks. This app provides you access to every
                  sporting equipment you can think of. We even sell stuff you
                  wouldn't find in your local store. We love our job and we love
                  the work we do. So we hope you enjoy shopping online and lose
                  weight in the process.
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: "#87838B" }}>
                  <Icon type="AntDesign" name="instagram" />
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(About);
