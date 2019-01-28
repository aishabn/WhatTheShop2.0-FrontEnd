import React, { Component } from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Form, Item, Input, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  static navigationOptions = {
    title: "Login"
  };

  handleLogin() {
    authStore.loginUser(this.state, this.props.navigation);
  }

  handleRegister() {
    authStore.registerUser(this.state, this.props.navigation);
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
          />
        </Item>
        <Button full onPress={() => this.handleLogin()}>
          <Text>Login</Text>
        </Button>
        <Button full onPress={() => this.handleRegister()}>
          <Text>Register</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
