import { createStackNavigator } from "react-navigation";

import CategoryListScreen from "../components/CategoryList";
import ProductListScreen from "../components/ProductList";
import ProductDetailScreen from "../components/ProductDetail";
import Cart from "../components/Cart";
import Menu from "../components/Menu/index";

const CatStack = createStackNavigator(
  {
    CL: CategoryListScreen,
    ProductListScreen: ProductListScreen,
    ProductDetailScreen: ProductDetailScreen,
    Cart: Cart,
    Menu: Menu
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "Categories"
    }
  }
);

export default CatStack;
