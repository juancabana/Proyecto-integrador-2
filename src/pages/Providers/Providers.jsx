import React, { Component } from "react";
import "./Providers.css";
import Header from "../../components/Header/Header";

import ContentProviders from "../../components/ContentProviders/ContentProviders";
import Footer from "./../../components/Footer/Footer";


class Providers extends Component {
  render() {
    return (
        <div className="Providers">
        <Header />
        <div className="wrapper-list-Providers">

          <ContentProviders/>
          <Footer/>

          
          


        </div>
        </div>
    );
  }
}

export default Providers;
