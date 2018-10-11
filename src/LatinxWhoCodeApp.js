import React, { Component } from "react";
import devs_image from "./assets/images/devs_char.png";
import "./App.css";
import Devs from "./components/Devs";
import DevsListFilters from "./components/DevsListFilters";

class LatinxWhoCodeApp extends Component {
  render() {
    return (
      <div className="wrapper-app">
        <div className="logo_style logo logo-wrapper">
          <span>{"<"}</span>LatinxsWhoCode<span>{"/>"}</span>
        </div>

        <div className="app-menu-list" >
          <DevsListFilters/>
          <div className="sub-links">
            <a href="https://goo.gl/forms/d3hfQGfXi7jKwtyt1" target="blank">
              <p>Join Community</p>
            </a>
            <a href="https://gdljs.slack.com" target="blank">
              <p>Slack</p>
            </a>
            <p>Jobs</p>
          </div>
        </div>

        <div className="app-content" >
          <div className="app-wrapper-header">
            <div className="row-header">
              <header className="App-header">
                <div className="hero-type">
                  <p className="App-intro">
                    <span className="syntax_style">{"<"}</span>
                    Latinxs
                    <span className="syntax_style">{">"}</span>
                  </p>
                  <p className="App-intro">
                    <span className="syntax_style tabbed">{"<"}</span>
                    <span className="dev-style">Developers</span>
                    <span className="syntax_style">{"/>"}</span>
                  </p>
                  <p className="App-intro">
                    <span className="syntax_style">{"</"}</span>
                    Latinxs
                    <span className="syntax_style">{">"}</span>
                  </p>
                  <p className="header_p">
                    A directory built to network with no boundaries.
                  </p>
                </div>

                <div className="img-devs">
                  <img
                    src={devs_image}
                    className="img-responsive"
                    alt="Devs working"
                    draggable={false}
                  />
                </div>
              </header>
            </div>
          </div>
        </div>

        <Devs />
      </div>
    );
  }
}

export default LatinxWhoCodeApp;
