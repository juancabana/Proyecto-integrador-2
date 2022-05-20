import React, { Component } from "react";
import imgGirl from "../../core/assets/img/Group8424.png";

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <>
        <div className="box">
          <div className="sectionImage">
            {/* <!-- Rectangulo 1 --> */}
            <svg id="rectangle1"></svg>
            <svg id="rectangle2"></svg>
            <img className="imgGirl" src={imgGirl} alt="" />
          </div>

          {/* <!-- parte de las letras de "Vive saludable" --> */}
          <div className="text">
            <div className="firstText">
              <h1 id="text1">VIVE</h1>
            </div>

            <div className="secondText">
              <h1 id="text2">SALUDABLE</h1>
            </div>
          </div>

          {/* <!-- Parte del boton --> */}
          <div className="content-button-contact">
            <a className="button" href="mailto: juand.cabanat@unac.edu.co">Contactanos</a>
          </div>
        </div>
      </>
    );
  }
}

export default Content;
