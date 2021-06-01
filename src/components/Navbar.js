import React from "react";
import "../styles.css";
import logo from "./a12.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftside">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            title="Click to go Back to Home Page"
            height="100px"
          ></img>
        </Link>
      </div>
      <div className="rightside">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}
export default Navbar;
