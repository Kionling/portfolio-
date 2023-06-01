import React, { useEffect } from "react";
import "./portfolio.css";
import Danny from "./assets/Dan.jpg";
import HIKR from "./assets/signinHikr.png";
import PlanNJam from "./assets/planN.png";
import EmployeeGen from "./assets/password.png";
import PC from "./assets/pc.png";
import Weather from "./assets/weatherDash.png";
import Train from "./assets/trainMoving.gif";
import { Link } from "react-router-dom";
import Shoppr from "./assets/shoppr (1).png";
import moment from "moment";

function Portfolio() {
  return (
    <div className="">
      <div class="row">
        <div class="col s12 m8 offset-m2 l6 offset-l3 ">
          <div class="card-panel #f50057 pink accent-3 z-depth-0" id="cardDiv">
            <div class="row valign-wrapper ">
              <div class="col s2">
                <img src={Danny} alt="Danny" class="circle responsive-img" />
              </div>
              <div class="col s10">
                <span class="white-text" id="spanWeight">
                  This is a message from the creator. As a part-time student and
                  full-time father, these projects are highly self-driven. In
                  order to complete these assignments, it requires dedication,
                  self-motivation, and passion for which I am a student diving
                  into the unknown. Below are my milestones in my career as a
                  developer. I will showcase the top ones I loved to create. I
                  will also link the rest of my projects through my Github!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row ">
          <div class="col l4">
            <div class="card #03a9f4 light-blue">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={PlanNJam} alt="PlanNJam" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Plan N' Jam
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://liza-p.github.io/project-1/"
                    class="white-text"
                  >
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  First Group Project<i class="material-icons right">close</i>
                </span>
                <p>
                  This was my first group project. Royce williams and Liza
                  Poliachenko were my partners and they handled the back-end
                  functionality of this project. I worked on the front-end
                  entirely by myself. No help. Nothing. Just me. I'm definitely
                  proud of the work I've done in this project. Take a look for
                  yourself! Are you in need of a planner? Are you disorganized?
                  Look no further, Plan N' Jam ensures, "If there's a plan, then
                  there's a Jam!"
                </p>
              </div>
            </div>
          </div>
          <div class="col l4">
            <div class="card #d500f9 purple accent-3">
              <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={Weather} alt="Weather Dashboard" />
              </div>
              <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                  Weather Dashboard
                  <i class="material-icons right activator">more_vert</i>
                </span>
                <p>
                  <a
                    href="https://kionling.github.io/Weather-dashboard/"
                    class="white-text"
                  >
                    Deployed Site
                  </a>
                </p>
              </div>
              <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">
                  APIs...Apple Pie<i class="material-icons right">close</i>
                </span>
                <p>
                  My first time using APIs. Third party that is. It was so easy
                  and exciting! I was really happy with the look and
                  functionality. The back-end portion of saving information was
                  the hardest to do, but I loved it.
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="row">
              <div class="col l4">
                <div class="card  #f48fb1 pink lighten-3 ">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={PC} alt="pcxparts" />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Pc parts wishlist
                      <i class="material-icons right activator">more_vert</i>
                    </span>
                    <p>
                      <a href="pcpartswish.herokuapp.com/" class="white-text">
                        Deployed Site
                      </a>
                    </p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">
                      I need handlebars to ride this bike
                      <i class="material-icons right">close</i>
                    </span>
                    <p>
                      With the new given concept of handlebars and mysql, we are
                      given a task to use both of them. This project is created
                      simply by using mysql, express, and handlebars to create a
                      pc build organizer for the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="parallax-container" id="wantToSee">
        <div id="parallaxText">
          <h1 id="seeMore">
            <a href="https://github.com/kionling" class="white-text">
              Want to see more? Click here!
            </a>
          </h1>
        </div>
      </div>

      
    </div>
  );
}

export default Portfolio;
