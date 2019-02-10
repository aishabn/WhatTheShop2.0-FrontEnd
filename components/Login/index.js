import React, { Component } from "react";
import { observer } from "mobx-react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
// NativeBase Components
import { Form, Item, Button, Text } from "native-base";

// Store
import authStore from "../../stores/authStore";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  static navigationOptions = ({ navigation }) => {
    title: "Login";
  };

  handleLogin() {
    authStore.loginUser(this.state, this.props.navigation);
  }

  handleSignUp() {
    this.props.navigation.replace("Register");
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
            leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            onChangeText={password => this.setState({ password })}
            leftIcon={{ type: "font-awesome", name: "chevron-left" }}
          />
        </Item>
        <Button full dark onPress={() => this.handleLogin()}>
          <Text>Login</Text>
        </Button>
        <Button transparent dark onPress={() => this.handleSignUp()}>
          <Text>You don't have an account? SignUp Now</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
