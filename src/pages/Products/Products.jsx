import React, { Component } from "react";
import "./Products.css";
import Header from "../../components/Header/Header";
import ContentProducts from "../../components/ContentProducts/ContentProducts";

import Footer from "./../../components/Footer/Footer";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Header />
        <div className="wrapper-list-Products">
          <ContentProducts />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Products;
