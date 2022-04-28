import React, { Component } from "react";
import "./Products.css";
import Header from "../../components/Header/Header";
import ContentProducts from "../../components/ContentProducts/ContentProducts";

class Products extends Component {
  render() {
    return (
      <div className="Products">
        <Header />
        <div className="wrapper-list-Products">

          <ContentProducts/>

        </div>
      </div>
    );
  }
}

export default Products;
