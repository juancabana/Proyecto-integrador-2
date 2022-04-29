import React, { Component } from "react";

import "./ContentProducts.css";
import TopBarProducts from "../TopBarProducts/TopBarProducts";
import ListProducts from "../../components/ListProucts/ListProducts";


class ContentProducts extends Component {
  render() {
    return (
      <div className="ContentProducts">
        <TopBarProducts/>
        <ListProducts/>
    
      </div>
    );
  }
}

export default ContentProducts;
