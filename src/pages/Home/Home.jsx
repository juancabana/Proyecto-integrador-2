import React, { Component } from "react";

import "./home.css";
import imgGirl from "../../core/assets/img/Group8424.png";
import Header from "../../components/Header/Header";

class Login extends Component {
  render() {
    return (
      <body>
        <Header />
        <div className="bodyHome">
          <div className="ellipses">
            {/* <!-- elipse1 --> */}
            <div>
              <svg className="ellipse1">
                <ellipse cx="400" cy="400" rx="400" ry="400" />
              </svg>
            </div>

            {/* <!-- elipse2 --> */}
            <div>
              <svg className="ellipse2">
                <ellipse cx="400" cy="400" rx="400" ry="400" />
              </svg>
            </div>

            {/* <!-- elipse3  --> */}
            <div>
              <svg className="ellipse3">
                <ellipse cx="400" cy="400" rx="400" ry="400" />
              </svg>
            </div>

            {/* <!-- Este es el fondo que pone borrosas las elipses  --> */}
            <div className="backgroundDiv">
              {/* <!-- seción donde está la caja que contiene letras, boton , elipse e imagen  --> */}
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
                <div>
                  <button className="button">Nuestra empresa</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    );
  }
}
export default Login;
