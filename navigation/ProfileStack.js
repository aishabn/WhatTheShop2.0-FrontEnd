import { createStackNavigator } from "react-navigation";

import ProfileScreen from "../components/Profile";
import React from "react";

import LoginScreen from "../components/Login";
import RegisterScreen from "../components/Register";
import { Icon } from "native-base";
const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "WhatTheShop"
    }
  }
);

export default ProfileStack;
