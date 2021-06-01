import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page5 = (product) => {
  return (
    <div>
      <h1>water bottels</h1>
      <section>
        <img
          className="po"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/water-bottles-1613062033.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>Stainless steal water bottel</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 400.00</h3>

          <p>Fastest delivery: Tomorrow</p>

          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <ul>
            <li>LEAK-PROOF AND DROP RESISTANT</li>
            <li>
              MADE FROM TRITAN PLASTIC: Made from 100% BPA free tritan plastic
            </li>
            <li>The beautiful design makes it as charming as decoration </li>
            <li>it’s lightweight and shatter resistant</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page5;
