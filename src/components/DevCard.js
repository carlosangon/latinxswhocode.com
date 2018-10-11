import React from "react";
import "../App.css";

const DevCar = ({ photoUrl, name, location, tagline, tags, site, twitter, github }) => (
    <div className="card-style">
      <img src={photoUrl}  className="user-img" alt="dev avatar" draggable={false} />
      <div className="dev-card">
        <p className="user-name">{name}</p>
        <p className="user-location">{location}</p>
        <p className="user-descriiption">{tagline}</p>
      </div>
      <span className="user-keywords">{tags}</span>
      <div className="row-btns-card">
        <a href={site} target="_blank">
          <button className="user-btn">Site</button>
        </a>
        <a href={'twitter'} target="_blank">
          <button className="user-btn">Twitter</button>
        </a>
      </div>
    </div>
);

export default DevCar;


// {tags.map((tag, key) => (
//     <span key={key} className="user-keywords">
//         {tag}{" "}
//     </span>
// ))}