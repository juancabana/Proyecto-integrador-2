import React, { Component } from "react";
import "./Users.css";
import Header from "../../components/Header/Header";
import ContentUsers from "../../components/ContentUsers/ContentUsers";
import Footer from "../../components/Footer/Footer";

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <Header />
        <div className="wrapper-list-users">
          <ContentUsers />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Users;
