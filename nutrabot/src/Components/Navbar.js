import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
<<<<<<< HEAD
import homeIcon from "../Assets/homeicon.png";
import resourcesIcon from "../Assets/resources.png";
=======
import resourcesIcon from "../Assets/resourcesicon.png";
>>>>>>> 91ec810dd9381ab11541c4afcf3bfd9baa09fe93
import mymealsIcon from "../Assets/dinner.svg";
import nutrabot from "../Assets/nutrabot.png";

export default function Navbar({ clearSearch }) {
  return (
    <nav>
      <Link to="/">
        <img src={nutrabot} alt="home" onClick={clearSearch} />
      </Link>
      <Link to="/resources">
        {" "}
        <img src={resourcesIcon} alt="resources" onClick={clearSearch} />
      </Link>
      <Link to="/mymeals">
        {" "}
        <img src={mymealsIcon} alt="my meals" onClick={clearSearch} />
      </Link>
    </nav>
  );
}
