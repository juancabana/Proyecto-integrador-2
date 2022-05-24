import React, { Component } from "react";
import "./Products.css";
import Header from "../../components/Header/Header";
import ContentProducts from "../../components/ContentProducts/ContentProducts";
import LinkFloat from "../../components/linksFloat/LinkFloat";

import Footer from "./../../components/Footer/Footer";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Header />
        <div className="wrapper-list-Products">
          <div className="containerlist">
            <ContentProducts />
          </div>
          <LinkFloat />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Products;
