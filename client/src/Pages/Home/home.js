import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./home.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <div id="mainBanner">
        <div className="row bold centerText" id="firstBanText">
          <h3 className="white-text" id="firstTxt">
            The Newest Project<span id="period">.</span>
          </h3>
        </div>
      </div>

      <div className="row #01579b light-blue darken-3 " id="firstBanner">
        <div id="textDiv" className="col s7 l4">
          <div className="container">
            <Link to="/portfolio">
              <div className="row">
                <div className="col s12 l9">
                  <h3 className="" id="banTxt">
                    Browse: The Latest Projects
                  </h3>
                </div>
                <div className=" col s12 l6 offset-l8">
                  <p id="subtitles">Explore the latest projects on my github</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className=" col s5 l8" id="firstImage"></div>
      </div>

      <div className="row #00e676 green accent-3" id="secondBanner">
        <div className="col s5 l8" id="secondImage"></div>
        <div className=" col s7 l4">
          <div className="">
            <Link to="/contact">
              <div className="row">
                <div className="col s12 l8">
                  <h3 id="leftHand">Get In Contact With Me</h3>
                </div>
                <div id="subtitles2" className="col s12 l5">
                  <p>Send a personalized email to get in contact with me</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="row #ff5722 deep-orange" id="thirdBanner">
        <div id="textDiv" className="col s7 l4">
          <Link to="/about">
            <div className="container">
              <div className="row">
                <div className="col s12 l8">
                  <h3 className="" id="banTxt">
                    Learn More About Me
                  </h3>
                </div>
                <div className=" col s12 l6 offset-l8">
                  <p id="subtitles">
                    More info on my background and my coding journey
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className=" col s5 l8" id="thirdimage"></div>
      </div>

      <div className="row" id="lastBanner">
        <div className="col s12 l12">
          <h1 className="white-text" id="peaceTag">
            Peace<span id="period">.</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
