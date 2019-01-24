import { createStackNavigator } from "react-navigation";

import CategoryListScreen from "../components/CategoryList";
import ProductListScreen from "../components/ProductList";
import ProductDetailScreen from "../components/ProductDetail";

const CatStack = createStackNavigator(
  {
    CL: CategoryListScreen,
    ProductListScreen: ProductListScreen,
    ProductDetailScreen: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      title: "Categories"
    }
  }
);

export default CatStack;
