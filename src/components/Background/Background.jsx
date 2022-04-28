import React, { Component } from "react";
import "./Background.css";

import Content from "../../components/Content/Content";

class Background extends Component {
  render() {
    return (
      <>
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
              <Content />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Background;
