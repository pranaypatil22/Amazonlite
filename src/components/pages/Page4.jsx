import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page4 = (product) => {
  return (
    <div>
      <h1>Movies</h1>
      <section>
        <img
          className="po"
          src="https://images.hungama.com/c/1/f65/c96/2019258/2019258_1280x800.jpg"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>harry potter and the goblet of fire</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 6,00.00</h3>

          <p>Fastest delivery: Tomorrow</p>

          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <p>The Triwizard Tournament is to be held at Hogwarts. </p>
          <p>
            Only wizards who are over seventeen are allowed to enter - but that
            doesn't stop
          </p>
          <p>
            Harry dreaming that he will win the competition. Then at Hallowe'en,
          </p>
          <p>
            when the Goblet of Fire makes its selection, Harry is amazed to find
          </p>
          <p>his name is one of those that the magical cup picks out.</p>
        </div>
      </section>
    </div>
  );
};
export default Page4;
