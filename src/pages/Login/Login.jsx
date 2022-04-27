import React, { Component } from "react";
import Form from "../../components/Form/Form";
import "../../pages/Login/Login.css";
import imgFrame1 from "./../../core/assets/img/Frame1.png";
import imgFrame2 from "./../../core/assets/img/Frame2.png";

class Login extends Component {
  render() {
    return (
      <div className="backg">
        <div id="frame1">
          <img className="image" src={imgFrame1} alt="" />
        </div>
        <div id="frame2">
          <img className="image" src={imgFrame2} alt="" />
        </div>
        <Form />
      </div>
    );
  }
}
export default Login;
