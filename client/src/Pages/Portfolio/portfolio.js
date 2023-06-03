import React, { useEffect } from "react";
import "./portfolio.css";
import Danny from "./assets/Dan.jpg";
import PlanNJam from "./assets/planN.png";
import PC from "./assets/PCPARTS.png";
import Weather from "./assets/weatherDash.png";

function Portfolio() {
  return (
    <div className="">
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
                  This project marked my inaugural experience working in a
                  collaborative setting. Royce Williams and Liza Poliachenko
                  served as my esteemed project partners, skillfully managing
                  the back-end functionality of our endeavor. Meanwhile, I
                  assumed sole responsibility for the front-end development,
                  diligently working without any external assistance. I take
                  immense pride in the achievements I have accomplished
                  throughout this undertaking. I invite you to examine the
                  results firsthand. Are you currently seeking a planner to
                  address organizational challenges? Look no further, as Plan N'
                  Jam guarantees that "Where there's a plan, there's a Jam!"
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
                  REST API Project<i class="material-icons right">close</i>
                </span>
                <p>
                  This was my first encounter with utilizing third-party APIs,
                  and it proved to be a remarkably straightforward and
                  stimulating experience. I derived genuine satisfaction from
                  both the visual appeal and the seamless functionality
                  achieved. It is worth mentioning that the implementation of
                  the backend, specifically the task of preserving data, posed a
                  considerable level of difficulty. However, I found great
                  enjoyment in tackling this particular aspect.
                </p>
              </div>
            </div>
          </div>
          <div class="">
            <div class="row">
              <div class="col l4">
                <div class="card #f48fb1 pink lighten-3 ">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src={PC} alt="pcxparts" />
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4">
                      Pc Parts Wishlist
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
                      Introduction to Express Handlebars
                      <i class="material-icons right">close</i>
                    </span>
                    <p>
                      In light of the recently introduced concepts of Handlebars
                      and MySQL, we have been presented with the assignment of
                      effectively integrating both technologies. The objective
                      of this project is to develop a PC build organizer
                      utilizing MySQL, Express, and Handlebars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
