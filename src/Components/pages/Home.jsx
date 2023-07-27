import React from "react";
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <div className="grid-section">
        <div className="container1">
          <h1 className="welcome">Welcome, we are glad you are here.</h1>

          <h3 className="overview">
            Ìmótótó is a platform that focuses on healthy ecosystem through
            collection and proper disposal of waste. it seeks in the long run to
            bring about waste recycling.
          </h3>
        </div>
        <div className="container">
          <h1> Our Expertise</h1>
          <h3>
            Get rid of your waste easily using our wide network of waste
            collectors, whenever and wherever.
          </h3>
        </div>
      </div>

      <div>
      <img src='./images/imototo3.png' className="logo" alt="LOGO IMAGE" height= '200px' width='250px'></img>
      </div>
    </div>
  );
}
