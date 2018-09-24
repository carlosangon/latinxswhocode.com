import React, { Component } from "react";
import devs_image from "./assets/images/devs_char.png";
import "./App.css";
import { Grid, Col, Row } from "react-bootstrap";
import Devs from "./components/Devs";
import DevsListFilters from "./components/DevsListFilters";

class LatinxWhoCodeApp extends Component {
  render() {
    return (
      <Grid fluid>

        <Col md={2}>
          <div className="logo_style logo">
            <span>{"<"}</span>LatinxsWhoCode<span>{"/>"}</span>
          </div>
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
        </Col>

        <Col md={10}>
          <Grid>
            <Row>
              <header className="App-header">
                <Col md={3} sm={4} className="hero-type">
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
                    A directory built to network with no boundries.
                  </p>
                </Col>

                <Col md={9} sm={8}>
                  <img
                    src={devs_image}
                    className="img-responsive"
                    alt="Devs working"
                    draggable={false}
                  />
                </Col>
              </header>
            </Row>
            <Devs />
          </Grid>
        </Col>
      </Grid>
    );
  }
}

export default LatinxWhoCodeApp;
