import React from "react";
import "../styles.css";
function Navbar() {
  return (
    <div className="Navbar">
      <div className="leftside">
        <h1>Amazon</h1>
      </div>
      <div className="rightside">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}
export default Navbar;
