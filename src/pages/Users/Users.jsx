import React, { Component } from "react";
import "./Users.css";
import Header from "../../components/Header/Header";
import ContentUsers from "../../components/ContentUsers/ContentUsers";
import Footer from "../../components/Footer/Footer";
import LinkFloat from "../../components/linksFloat/LinkFloat";

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <Header />
        <div className="wrapper-list-users">
          <div className="containerlist">
            <ContentUsers />
          </div>
          <LinkFloat />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Users;
