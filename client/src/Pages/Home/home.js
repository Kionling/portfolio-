import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div id="overallBanner">
      <div id="mainBanner">
        <div className="row bold centerText" id="firstBanText">
          <h4 className="white-text bold">
            The Newest Project<span id="period">.</span>
          </h4>
        </div>
      </div>
      <div className="row #ff1744 red accent-3" id="firstBanner"></div>
    </div>
  );
}

export default Home;
