import React, { Component } from "react";

import Header from "../../components/Header/Header";
import Background from "../../components/Background/Background";


import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Header />
        <Background />
      </div>
    );
  }
}
export default Home;
