import React from "react";
import "../../styles.css";
const logo = require("./b.PNG");
const logo2 = require("./c.PNG");

const Page2 = (product) => {
  return (
    <div>
      <h1>Mac Notebooks</h1>
      <section>
        <img
          className="po"
          src="https://cdn.vox-cdn.com/thumbor/vGTTyiMMUHIHLs0FjoF0z99m6_E=/0x0:2040x1360/1200x800/filters:focal(895x304:1221x630)/cdn.vox-cdn.com/uploads/chorus_image/image/68592461/vpavic_4291_20201113_0366.0.0.jpg"
          height="400px"
          width="350px"
          align="left"
        ></img>
        <div className="single">
          <h1>New Apple MacBook Pro with Apple M1</h1>
          <hr></hr>
          <h3 style={{ color: "red" }}>M.R.P.:₹ 65,000.00</h3>

          <p>Fastest delivery: Tomorrow</p>
          <img src={logo}></img>
          <br></br>
          <img src={logo2}></img>
          <hr></hr>
          <h3>About</h3>
          <ul>
            <li>
              Apple-designed M1 chip for a giant leap in CPU, GPU, and machine
              learning performance
            </li>
            <li>
              8-core CPU delivers up to 2.8x faster performance to fly through
              workflows quicker than ever
            </li>
            <li>16-core Neural Engine for advanced machine learning</li>
            <li>
              Get more done with up to 20 hours of battery life, the longest
              ever in a Mac
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default Page2;
