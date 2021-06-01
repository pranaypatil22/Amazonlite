import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");
const Page = (product) => {
  return (
    <div>
      <h1>Shirts for Men</h1>
      <section>
        <img
          className="po"
          src="https://www.dhresource.com/f2/albu/g10/M01/80/A4/rBVaWV6O0huAAQapAAQstoPfc0A197.jpg"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>Sanskar Fashion Mens Shirt</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 1,500.00</h3>

          <p>Fastest delivery: Tomorrow</p>

          <br></br>
          <img src={logo2}></img>
          <hr></hr>

          <h3>About</h3>
          <ul>
            <li>Care Instructions: Machine Wash</li>
            <li>Fit Type: Regular Fit</li>
            <li>Look trendy and feel comfortable with this Shirt.</li>
            <li>Made of 100% Cotton, soft, comfy and breathable.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page;
