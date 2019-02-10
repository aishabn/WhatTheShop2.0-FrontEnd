import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content, View } from "native-base";
import SwiperFlatList from "react-native-swiper-flatlist";
import { StyleSheet, Dimensions } from "react-native";

// Store
// import productStore from "../../store/ProductStore";

// Component
import CategoryItem from "./CategoryItem";
import items from "../data";
import CartButton from "../CartButton";
// import CartStore from "../../stores/cartStore";
import ProductStore from "../../stores/ProductStore";

class CategoryList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Category List",
    headerTransparent: true,
    headerRight: <CartButton route="Cart" />
  });
  render() {
    const products = ProductStore.products;
    let CategoryList;
    CategoryList = products.map(product => (
      <CategoryItem product={product} key={product.id} />
    ));
    return (
      <Content>
        <View style={styles.container}>
          <SwiperFlatList
            autoplay
            autoplayDelay={4}
            autoplayLoop
            index={0}
            showPagination
          >
            {CategoryList}
          </SwiperFlatList>
        </View>
      </Content>
    );
  }
}
export const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    height: height * 0.99
  },
  child: {
    height: height * 0.5,
    width,
    justifyContent: "center"
  },
  text: {
    fontSize: width * 0.5,
    textAlign: "center"
  }
});

export default observer(CategoryList);
