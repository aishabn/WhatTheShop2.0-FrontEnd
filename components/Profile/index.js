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
  }
  componentDidMount() {
    authStore.userProfileData();
  }
  handleLogout() {
    authStore.logoutUser(this.props.navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Someone's Name</Text>
        <Text style={styles.info}> Usename: </Text>
        <Text style={styles.infoPart2}> Email:</Text>
        <Text style={styles.infoPart5}> Address</Text>
        <Text style={styles.infoPart2}> Area: </Text>
        <Text style={styles.infoPart2}> Block:</Text>
        <Text style={styles.infoPart2}> Street:</Text>
        <Text style={styles.infoPart2}> Building:</Text>
        <Text style={styles.infoPart2}> Phone Number:</Text>
        <View style={styles.bodyContent}>
          <Button
            bordered
            dark
            style={styles.buttonContainer}
            onPress={() => this.handleLogout()}
          >
            <Text>LOGOUT</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  body: {
    marginTop: 40
  },
  bodyContent: {
    // flex: 1,
    alignItems: "center",
    padding: 10
  },
  name: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 40,
    textAlign: "center",
    fontWeight: "600",
    backgroundColor: "#353535"
  },
  info: {
    fontSize: 16,
    color: "#34495e",
    marginTop: 20,
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 20
  },
  infoPart2: {
    fontSize: 16,
    color: "#34495e",
    marginTop: 25,
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 20
  },
  infoPart5: {
    fontSize: 18,
    color: "#ffffff",
    marginTop: 25,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600",
    backgroundColor: "#353535"
  },
  description: {
    fontSize: 16,
    color: "#34495e",
    marginTop: 10,
    textAlign: "left"
  },
  buttonContainer: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 50,
    marginLeft: 128,
    // height: 55,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
    // width: 250
    // borderRadius: 30
  }
});

export default withNavigation(observer(Profile));
