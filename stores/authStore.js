import { decorate, observable, action, computed } from "mobx";
import axios from "axios";
import { AsyncStorage } from "react-native";
import jwt_decode from "jwt-decode";
import { navigation } from "react-navigation";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000/"
  baseURL: "http://207.154.255.247/"
});

class Store {
  constructor() {
    this.user = null;
  }

  setAuthToken(token) {
    if (token) {
      // Apply to every request
      axios.defaults.headers.common.Authorization = `jwt ${token}`;
      console.log("Token set");
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
  }

  setCurrentUser(token) {
    if (token) {
      // Decode token to get user data
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      this.user = null;
    }
  }

  logoutUser(navigation) {
    return AsyncStorage.removeItem("jwtToken").then(
      () => {
        this.setCurrentUser();
        this.setAuthToken();
        navigation.replace("Login");
      },
      () => {
        console.log("something went wrong with logging out");
      }
    );
  }

  loginUser(userData, navigation) {
    instance
      .post("api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const { token } = user;
        console.log(token);
        // Set token to Auth header
        this.setAuthToken(token);
        this.setCurrentUser(token);
        // Save token to localStorage

        return AsyncStorage.setItem("jwtToken", token).then(
          () => {
            navigation.replace("Profile");
          },
          () => console.log("something went wrong with setting jwt token")
        );
      })
      .catch(err => console.log("something went wrong logging in"));
  }

  registerUser(userData, navigation) {
    instance
      .post("api/register/", userData)
      .then(res => res.data)
      .then(() => {
        this.loginUser(userData, navigation);
      })
      .catch(err => console.error(err.response.data));
  }

  checkForToken = () => {
    return AsyncStorage.getItem("jwtToken")
      .then(res => res.data)
      .then(token => {
        if (token) {
          const currentTime = Date.now() / 1000;

          // Decode token and get user info
          const decodedUser = jwt_decode(token);

          // Check token expiration
          if (decodedUser.exp > currentTime) {
            // Set auth token header
            this.setAuthToken(token);
            // Set user and isAuthenticated
            this.setCurrentUser(token);
          } else {
            this.logoutUser();
          }
        }
      })
      .catch(err => console.error(err));
  };
}

decorate(Store, {
  user: observable
});

export default new Store();
