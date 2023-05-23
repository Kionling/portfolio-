import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import nostalgia from "../Home/assets/nostalgia.jpg";
function Home() {
  return (
    <div>
      <div id="mainBanner">
        <div className="row bold centerText" id="firstBanText">
          <h3 className="white-text" id="firstTxt">
            The Newest Project<span id="period">.</span>
          </h3>
        </div>
      </div>
      <div className="row #ff1744 red accent-3" id="firstBanner">
        <div className="col s7 l4">
          <div className="container">
          <div className="row">
            <div className="col s12 l12">
            <h3 className="rightHand" id="banTxt">
              Browse: The latest projects
            </h3>
            </div>
            <div><p>Browse my latest projects on Github</p></div>
          </div>
          
        
          </div>
        </div>
        <div className=" col s5 l8" id="firstImage"></div>
      </div>
      <div className="row #aa00ff purple accent-4" id="secondBanner">
        <div className="col s8 l8" id="secondImage"></div>
        <div className=" container col s4 l4">
          <h3 id="leftHand">
            Contact me!
          </h3>
        </div>
      </div>
      <div className="row #651fff deep-purple accent-3" id="thirdBanner">
        <div className="col s4 l4">
          <div className="container">
            <h3 className="rightHand" id="banTxt">
              Learn more about me!
            </h3>
          </div>
        </div>
        <div className="col s8 l8" id="firstImage"></div>
      </div>
      <div className="row" id="lastBanner">
        <h1 className="white-text" id="peaceTag">Peace<span id="period">.</span></h1>
      </div>
    </div>
  );
}

export default Home;
