import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Background from "../../components/Background/Background";


import './Home.css';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Header />
        <Background />
      </div>
    );
  }
}
export default Login;
