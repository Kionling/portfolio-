import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import nostalgia from "../Home/assets/nostalgia.jpg";
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
      <div className="row #ff1744 red accent-3" id="firstBanner">
        <div className="col s4 l4">
          <div className="container">
            <p className="bold centerText" id="banTxt">
              Explore
            </p>
          </div>
        </div>
        <div className=" col s8 l8" id="firstImage"></div>
      </div>
      <div className="row #aa00ff purple accent-4" id="secondBanner">
        <div className="col s8 l8" id="secondImage"></div>
        <div className=" container col s4 l4">
          <p className=" bold centerText" id="banTxt">
            Explore
          </p>
        </div>
      </div>
      <div className="row #651fff deep-purple accent-3" id="thirdBanner">
        <div className="col s4 l4">
          <div className="container">
            <p className="bold centerText" id="banTxt">
              Explore
            </p>
          </div>
        </div>
        <div className="col s8 l8" id="firstImage"></div>
      </div>
      <div className="row" id="lastBanner">
      </div>
    </div>
  );
}

export default Home;
