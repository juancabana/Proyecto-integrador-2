import React, { Component } from "react";

import imageLogo from "../../core/assets/img/Logo-Vitarrico.png";
import imagePortfolio from "../../core/assets/img/Portafolio.png";
import imageCandado from "../../core/assets/img/Candado.png";
import '../../proy/index.css';

class Login extends Component {
  render() {
    return (
      <header>
        <svg>
          <linearGradient
            id="linearGradient1"
            gradientTransform="rotate(30 .5 .5)"
          >
            <stop offset="20%" stop-color="#09A7BC"></stop>
            <stop offset="80%" stop-color="#2EC0EE"></stop>
          </linearGradient>
          <ellipse
            cx="50"
            cy="50"
            rx="50"
            ry="50"
            style
            fill="url(#linearGradient1)"
          />
        </svg>
        <div id="frame1"></div>

        <div id="frame2"></div>

        <div id="container">
          <div id="section-logo">
            <img class="img" src={imageLogo} alt="" />
            <h2 name>VitaGest</h2>
          </div>

          <div>
            <h1 id="linea1">
              Inicia sesión
              <style></style>
            </h1>

            <h1 id="linea2">en tu cuenta</h1>
          </div>

          <div id="secction-formulario">
            <form class="form">
              <div class="Iduser">
                <div class="labIDuser">
                  <label for="IduserFor">ID Usuario</label>
                </div>
                <div>
                  <img class="img" src={imagePortfolio} alt="" />
                  <input type="text" id="IduserFor" name="IduserFor" />
                </div>
              </div>

              <div class="Password">
                <div class="labPassword">
                  <label for="PasswordFor">Contraseña</label>
                </div>
                <div>
                  <img class="img" src={imageCandado} alt="" />
                  <input type="text" id="PasswordFor" name="PasswordFor" />
                </div>
              </div>

              <div class="Check">
                <input type="checkbox" class="Checklist" name="remember" />
                <label for="remember"> Recordarme</label>
              </div>

              <button class="LogIn">Iniciar sesión</button>
            </form>
          </div>
        </div>
      </header>
    );
  }
}
export default Login;
