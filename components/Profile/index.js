import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { observer } from "mobx-react";
import axios from "axios";
// NativeBase Components
import { Card, CardItem, Text, Button, Body } from "native-base";

import { StyleSheet, View, Image, TouchableOpacity } from "react-native";

import authStore from "../../stores/authStore";

const instance = axios.create({
  baseURL: "http:/207.154.255.247/"
});

class Profile extends React.Component {
  constructor() {
    this.state = {
      username: ""
      // email: "",
      // first_name: "",
      // last_name: "",
      // phone_number: "",
      // address: {
      //   area: "",
      //   block: "",
      //   house: ""
      // }
    };
    this.handleUsername = this.handleUsername.bind(this);
  }

  handleUsername(value) {
    this.setState({ username: value });
  }

  handleLogout() {
    authStore.logoutUser(this.props.navigation);
  }

  userProfileData() {
    instance
      .get("api/profile/")
      .then(res => res.data)
      // .then(() => {
      //   this.username = "username";
      //   this.email = "email";
      //   this.first_name = "first_name";
      //   this.last_name = "last_name";
      // })
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
          <Text style={styles.info}> Email:</Text>
          <Text style={styles.info}> Phone Number:</Text>
          <Text style={styles.info}> Address: </Text>
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
