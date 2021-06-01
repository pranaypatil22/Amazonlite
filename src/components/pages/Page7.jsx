import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page7 = (product) => {
  return (
    <div>
      <h1>Jackets for Men</h1>
      <section>
        <img
          className="po"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cool-jackets-1601401814.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>Fugazee Men’s Olive Corduroy Faux Fur Jacket</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 5,000.00</h3>

          <p>Fastest delivery: Tomorrow</p>
          <img src={logo}></img>
          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <ul>
            <li>Black solid jacket</li>
            <li>has a mock collar,straight hem, and polyester lining</li>
            <li>Look trendy and feel comfortable with this Shirt.</li>
            <li>2 pockets, zip closure, long sleeves,</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page7;
