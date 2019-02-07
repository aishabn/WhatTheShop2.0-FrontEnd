import React, { Component } from "react";
// import { withNavigation } from "react-navigation";
// import { Image } from "react-native";
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
  Right,
  Tile,
  Subtitle,
  Heading,
  Title,
  Image
} from "native-base";

class ProductItem extends Component {
  handlePress() {
    this.props.navigation.navigate("ProductDetailScreen", {
      itemDetail: this.props.product
    });
  }
  render() {
    return (
      <Image
        styleName="featured"
        source={{
          uri: "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png"
        }}
      >
        <Tile>
          <Title styleName="md-gutter-top" />
          <Subtitle styleName="line-through sm-gutter-top" />
          <Heading />
          <Text note>Price:{this.props.product.price}</Text>
          <Button styleName="md-gutter-top">
            <Icon name="cart" />
            <Text>ADD TO BASKET</Text>
          </Button>
        </Tile>
      </Image>
    );
  }
}

export default ProductItem;

/* <Container>
  <Header />
  <Content>
    <Card>
      <CardItem>
        <Left>
          <Thumbnail source={{ uri: this.props.product.img }} />
          <Button onPress={() => this.handlePress()}>
            <Text>PRESS</Text>
          </Button>
          <Body>
            <Text>{this.props.product.name}</Text>
            <Text note>Price:{this.props.product.price}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image
          onPress={() => this.handlePress()}
          source={{ uri: this.props.product.img }}
          style={{ height: 200, width: null, flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right>
      </CardItem>
    </Card>
  </Content>
</Container>; */
