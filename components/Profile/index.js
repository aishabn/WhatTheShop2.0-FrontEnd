import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";
import axios from "axios";
// NativeBase Components
import { Card, CardItem, Text, Button, Body } from "native-base";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import authStore from "../../stores/authStore";

import PreviousOrders from "../PreviousOrders";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/"
  baseURL: "http://207.154.255.247/"
});

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      address: {
        area: "",
        block: "",
        building: "",
        phone_number: ""
      }
    };
    // this.handleUsername = this.handleUsername.bind(this);
  }

  // handleUsername(value) {
  //   this.setState({ username: value });
  // }

  handleLogout() {
    authStore.logoutUser(this.props.navigation);
  }

  userProfileData() {
    instance
      .get("api/profile/")
      .then(res => res.data)
      .catch(err => console.log("Error!!"));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>Someone's Name</Text>
          </View>
          <Text style={styles.info}> Username: {this.state.username} </Text>
          <Text style={styles.info}> Email:{this.state.email}</Text>
          <Text style={styles.info}>
            {" "}
            Phone Number:{this.state.phone_number}
          </Text>
          <Text style={styles.info}> Address: </Text>
          <Text
            style={styles.info}
            onPress={() => this.props.navigation.navigate("PreviousOrders")}
          >
            {" "}
            Past Orders{" "}
          </Text>
          <View style={styles.bodyContent}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.handleLogout()}
            >
              <Text>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#e6b3b3",
    height: 150
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 90
  },
  name: {
    fontSize: 22,
    color: "#FFFFFF",
    fontWeight: "600"
  },
  body: {
    marginTop: 40
  },
  bodyContent: {
    // flex: 1,
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 28,
    color: "#696969",
    fontWeight: "600",
    marginTop: 10
  },
  info: {
    fontSize: 16,
    color: "black",
    marginTop: 15,
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    textAlign: "left"
  },
  buttonContainer: {
    marginTop: 40,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    width: 250,
    borderRadius: 30,
    backgroundColor: "#b3b3b3"
  }
});

export default withNavigation(observer(Profile));
