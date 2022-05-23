import React, { Component } from "react";


import "./TopBarUsers.css";

class TopBarUsers extends Component {
  render() {
    return (
      <div className="TopBarUsers">
        <div className="wrapper-buttons">
          <button className="button-new">
            <svg
              className="svg-add"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19Z" />
            </svg>
            <h2 className="h2New">New</h2>
          </button>

        </div>

        <div className="wrapper-h1">
          <h1 className="h1-title">Manage Users</h1>
        </div>

        <div className="wrapper-search">
          <input
            className="input-search"
            type="search"
            placeholder="&#xF004; Search..."
          />
        </div>
      </div>
    );
  }
}

export default TopBarUsers;
