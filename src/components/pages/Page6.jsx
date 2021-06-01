import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page6 = (product) => {
  return (
    <div>
      <h1>mens shoes</h1>
      <section>
        <img
          className="po"
          src="https://assetscdn1.paytm.com/images/catalog/product/F/FO/FOOFANTUM-SPORTFANT11631486BB9270B/1594127408424_0..jpg?imwidth=282&impolicy=hq"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>CLYMB Outdoor Sports Running Shoes</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 1,150.00</h3>

          <p>Fastest delivery: Tomorrow</p>

          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <ul>
            <li>Sole: Ethylene Vinyl Acetate</li>
            <li>Closure: Lace-Up</li>
            <li>Shoe Width: Medium</li>
            <li>
              Multiple uses: best running shoes for men's can be used in gym
              workout, outdoor running, morning walking etc.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page6;
