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
      categoryItem: this.props.product
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
                  <Text>{this.props.product.name}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: this.props.product.img }}
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

// import React, { Component } from "react";
// import { Container, Header, Content, Thumbnail, Text } from "native-base";
// import { withNavigation } from "react-navigation";
// class CategoryItem extends Component {
//   render() {
//     return (
//       <Container>
//         <Content>
//           <Thumbnail
//             square
//             large
//             source={{
//               uri:
//                 "https://facebook.github.io/react-native/docs/assets/favicon.png"
//             }}
//           />
//         </Content>
//       </Container>
//     );
//   }
// }

// export default withNavigation(CategoryItem);
