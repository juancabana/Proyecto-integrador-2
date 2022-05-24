import React, { Component } from "react";
import imageLogo from "../../core/assets/img/Logo-Vitarrico.png";
import imagePortfolio from "../../core/assets/img/Portafolio.png";
import imageCandado from "../../core/assets/img/Candado.png";
import { NavLink } from "react-router-dom";
import "./Form.css";

class Form extends Component {
  render() {
    return (
      <div id="container">
        <div className="section-logo-wrapper">
          <div id="section-logo">
            <img id="logo" src={imageLogo} alt="" />
            <h2 className="h2-login">VitaGest</h2>
          </div>
        </div>

        <div className="h1-wrapper">
          <h1 id="linea1">Inicia sesión</h1>
          <h1 id="linea2">en tu cuenta</h1>
        </div>

        <div id="secction-formulario">
          <form className="form">
            <div className="wrapper  User">
              <div className="labIDuser">
                <label for="IduserFor">ID Usuario</label>
              </div>
              <div className="ImgUser">
                <img src={imagePortfolio} alt="" />
              </div>
              <div className="IdUserFor">
                <input type="text" id="IduserFor" name="IduserFor" />
              </div>
            </div>

            <div className=" wrapper Password">
              <div className="labPassword">
                <label for="PasswordFor">Contraseña</label>
              </div>
              <div className="imgPassword">
                <img src={imageCandado} alt="" />
              </div>
              <div className="PasswordFor">
                <input type="text" id="PasswordFor" name="PasswordFor" />
              </div>
            </div>

            <div className="Check">
              <input type="checkbox" className="checklist" name="remember" />
              <label className="rememLab" for="remember">
                {" "}
                Recordarme
              </label>
            </div>

            <div className="buttonForm">
              <NavLink className="LogIn" to="/  ">
                Iniciar sesión
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
