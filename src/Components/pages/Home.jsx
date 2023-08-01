import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="grid-section">
        <div className="text-container">
          <div className="welcome-contatiner">
            <h1 className="welcome">Welcome, we are glad you are here.</h1>

            <h3 className="overview">
              Ìmótótó is a platform that focuses on healthy ecosystem through
              collection and proper disposal of waste. it seeks in the long run
              to bring about waste recycling.
            </h3>
          </div>

          <div className="expertise-container">
            <h1 className="expertise"> Our Expertise</h1>
            <h3 className="expertise-info">
              Get rid of your waste easily using our wide network of waste
              collectors, whenever and wherever. Our project is beneficial to
              the environment and its complex ecosystem at every stage by
              staying true to our mission to clean EKITI STATE, WE EXCEL AS AN
              ORGANIZATION IN RESTORATION OF CONTAMINATED ECOSYSTEM.
            </h3>
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
