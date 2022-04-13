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
        <div id="section-logo">
          <img className="img" src={imageLogo} alt="" />
          <h2>VitaGest</h2>
        </div>

        <div>
          <h1 id="linea1">
            Inicia sesión
            <style></style>
          </h1>

          <h1 id="linea2">en tu cuenta</h1>
        </div>

        <div id="secction-formulario">
          <form className="form">
            <div className="Iduser">
              <div className="labIDuser">
                <label for="IduserFor">ID Usuario</label>
              </div>
              <div>
                <img className="img" src={imagePortfolio} alt="" />
                <input type="text" id="IduserFor" name="IduserFor" />
              </div>
            </div>

            <div className="Password">
              <div className="labPassword">
                <label for="PasswordFor">Contraseña</label>
              </div>
              <div>
                <img className="img" src={imageCandado} alt="" />
                <input type="text" id="PasswordFor" name="PasswordFor" />
              </div>
            </div>

            <div className="Check">
              <input type="checkbox" className="Checklist" name="remember" />
              <label for="remember"> Recordarme</label>
            </div>
            
            <NavLink className='LogIn' to='/  ' >Iniciar sesión</NavLink>
              
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
