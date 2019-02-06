import React, { Component } from "react";
import { Form, Item, Input, Button, Text } from "native-base";

import axios from "axios";

import authStore from "../../stores/authStore";

const instance = axios.create({
  //   baseURL: "http://127.0.0.1:8000/"
  baseURL: "http://207.154.255.247/"
});

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: "",
      address: {
        area: "",
        block: "",
        street: "",
        building: "",
        phone_number: ""
      }
    };
  }

  static navigationOptions = ({ navigation }) => {
    title: "Register";
  };

  handleRegister() {
    authStore.registerUser(this.state, this.props.navigation);
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="First Name"
            autoCapitalize="none"
            onChangeText={first_name => this.setState({ first_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Last Name"
            autoCapitalize="none"
            onChangeText={last_name => this.setState({ last_name })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={email => this.setState({ email })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Area"
            autoCapitalize="none"
            onChangeText={area => this.setState({ area })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Block"
            autoCapitalize="none"
            onChangeText={block => this.setState({ block })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Street"
            autoCapitalize="none"
            onChangeText={street => this.setState({ street })}
          />
        </Item>
        <Item>
          <Input
            placeholder="Building"
            autoCapitalize="none"
            onChangeText={building => this.setState({ building })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Phone_number"
            autoCapitalize="none"
            onChangeText={phone_number => this.setState({ phone_number })}
          />
        </Item>
        <Button full onPress={() => this.handleRegister()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}

export default Register;
