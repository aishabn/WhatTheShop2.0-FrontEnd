import { createStackNavigator, createAppContainer } from "react-navigation";

import CategoryListScreen from "../components/CategoryList";
import ProductListScreen from "../components/ProductList";
import ProductDetailScreen from "../components/ProductDetail";
import Cart from "../components/Cart";
import Menu from "../components/Menu/index";
import Login from "../components/Login";
import Register from "../components/Register";
import Profile from "../components/Profile";
import About from "../components/Pages/About";
import Contact from "../components/Pages/Contact";
import PreviousOrders from "../components/PreviousOrders";

const MenuStack = createStackNavigator(
  {
    CL: CategoryListScreen,
    ProductListScreen: ProductListScreen,
    ProductDetailScreen: ProductDetailScreen,
    Cart: Cart,
    Menu: Menu,
    Login: Login,
    Register: Register,
    Profile: Profile,
    About: About,
    Contact: Contact,
    PreviousOrders: PreviousOrders
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {}
  }
);

const AppContainer = createAppContainer(MenuStack);

export default AppContainer;
