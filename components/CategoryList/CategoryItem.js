import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Tile } from "react-native-elements";

import { StyleSheet, Dimensions, ImageBackground } from "react-native";
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
  Image,
  View
} from "native-base";
import { white } from "ansi-colors";

class CategoryItem extends Component {
  handlePress() {
    this.props.navigation.navigate("ProductListScreen", {
      categoryItem: this.props.product
    });
  }

  render() {
    return (
      <ImageBackground
        source={{ uri: this.props.product.img }}
        style={styles.child}
      >
        <View style={styles.child}>
          <Text style={styles.text} onPress={() => this.handlePress()}>
            {this.props.product.name}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
export const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: height * 0.95
  },
  child: {
    height: height,
    width,
    justifyContent: "center",
    backgroundColor: "#FFFFFF30"
  },
  text: {
    fontSize: 100,
    textAlign: "center",

    color: "white"
  }
});

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

// {
/* <Container>
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
</Container>; */
// }

{
  /* <Tile
        imageSrc={require("../media/field.jpg")}
        title={this.props.product.name}
        featured
        onPress={() => this.handlePress()}
      /> */
}
