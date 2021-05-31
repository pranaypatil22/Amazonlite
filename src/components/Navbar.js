import React from "react";
import "../styles.css";
import logo from "./a12.png";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftside">
        <img className="logo" src={logo} height="100px"></img>
      </div>
      <div className="rightside">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}
export default Navbar;
