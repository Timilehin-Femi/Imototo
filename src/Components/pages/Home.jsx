import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="grid-section">
        <div className="text-container">
          <div className="welcome-contatiner">
            <h1 className="welcome"> We are glad you are here, WELCOME.</h1>
            <h3>[Ekabo si ile ise imototo]</h3>
            </div>

            <div>
            <h2 className="introduction">
              We <span>Reduce</span> Waste
            </h2>
            </div>

          <div>
            
            <h4 className="introduction-info">
              Get rid of your waste easily using our wide network of waste
              collectors and easy accesibility to legal dumpsite locations.
             join us in caring for the Environment  
            </h4>
            <div className="buttons">
                <button>Get Started.</button>
                <button>Learn more</button>

            </div>
          </div>
        </div>

        <div>
          <img
            src="./images/imototo3.png"
            className="logo"
            alt="LOGO IMAGE"
            height="200px"
            width="250px"
          ></img>
        </div>
      </div>
    </div>
  );
}
