import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page3 = (product) => {
  return (
    <div>
      <h1>Pixel Phones</h1>
      <section>
        <img
          className="po"
          src="https://images.hindustantimes.com/tech/img/2021/01/06/960x540/Google-Pixel-5-Review-Brilliant-but-outshined_1609928793012_1609928803190.jpg"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>Google Pixel 5 Sorta Sage, 8GB RAM, 128GB Storage</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 45,000.00</h3>

          <p>Fastest delivery: Tomorrow</p>
          <img src={logo}></img>
          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <ul>
            <li>Google Pixel 5 5G (8GB RAM, 128GB) Just Black</li>
            <li>
              5G capable smartphone gives you an extra boost of speed so you can
              download a movie in seconds
            </li>
            <li>
              Your phone will automatically receive the latest OS and security
            </li>
            <li>Pixel 5 is a water resistant smart phone; the metal unibody</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page3;
