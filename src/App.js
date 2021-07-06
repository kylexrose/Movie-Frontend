import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";

import MainRouter from "./MainRouter";

import "./App.css";

export class App extends Component {
  state = {
    user: null,//initial state of current user
  };

  componentDidMount() {
    let getJwtToken = window.localStorage.getItem("jwtToken");

    if (getJwtToken) {
      const currentTime = Date.now() / 1000;//check if token is still valid

      let decodedJWTToken = jwtDecode(getJwtToken);

      if (decodedJWTToken.exp < currentTime) {
        //logout
        this.handleUserLogout();
      } else {
        //login
        this.handleUserLogin(decodedJWTToken);
      }

      // console.log("currentTime", currentTime);
      // June XXXX xxpm- 1624985322
      // ONE DAY FROM June XXXX xxpm - 1625071722
      // Current Time - 163500000
      // console.log("decodedJWTToken", decodedJWTToken);
    }
  }

  handleUserLogin = (user) => {//set current user
    this.setState({
      user: {
        email: user.email,
      },
    });
  };

  handleUserLogout = () => {//remove the token in the local storage
    window.localStorage.removeItem("jwtToken");
    this.setState({
      user: null,
    });
  };

  render() {
    return (
      <>
        <ToastContainer position="top-center" />

        <MainRouter //this is the main layout
          user={this.state.user}
          handleUserLogin={this.handleUserLogin}
          handleUserLogout={this.handleUserLogout}
        />
      </>
    );
  }
}

export default App;
