import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { List, Content } from "native-base";

// Store
// import productStore from "../../store/ProductStore";

// Component
import CategoryItem from "./CategoryItem";
import items from "../data";

class CategoryList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Category List",
    headerLeft: null,
    headerRight: null
  });
  render() {
    let CategoryList;
    CategoryList = items.map(item => (
      <CategoryItem item={item} key={item.id} />
    ));
    return (
      <Content>
        <List>{CategoryList}</List>
      </Content>
    );
  }
}

export default observer(CategoryList);
