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
        <Button transparent onPress={() => this.handleSignUp()}>
          <Text>You don't have an account? SignUp Now</Text>
        </Button>
      </Form>
    );
  }
}
export default observer(Login);
