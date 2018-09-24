import React from "react";
import { Col, Row } from "react-bootstrap";
import "../App.css";

const DevCar = ({ photoUrl, name, location, tagline, tags, site, twitter, github }) => (
    <Col className="card-style" md={3} sm={6} xs={12}>
      <img src={photoUrl} className="user-img" alt="dev avatar" draggable={false} />
      <div className="dev-card">
        <p className="user-name">{name}</p>
        <p className="user-location">{location}</p>
       <p className="user-descriiption">{tagline}</p>
      </div>
      <span className="user-keywords">{tags}</span>
      <Row>
        <a href={site} target="_blank">
          <button className="user-btn">Site</button>
        </a>
        <a href={twitter} target="_blank">
          <button className="user-btn">Twitter</button>
        </a>
      </Row>
    </Col>
);

export default DevCar;


// {tags.map((tag, key) => (
//     <span key={key} className="user-keywords">
//         {tag}{" "}
//     </span>
// ))}