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
                  This project marked my first experience working on a group
                  collaboration. Royce Williams and Liza Poliachenko played
                  integral roles in developing the project's back-end
                  functionality, while I took full ownership of the front-end
                  implementation. Throughout the process, I faced the challenge
                  head-on, working diligently and independently to bring the
                  vision to life. The sense of accomplishment I feel for my
                  contributions to this project is undeniable. I invite you to
                  explore it yourself! If you find yourself in need of a planner
                  or struggling with disorganization, look no further than Plan
                  N' Jam. We firmly believe that with a solid plan in place,
                  success and enjoyment are guaranteed.
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
                  During my initial foray into utilizing third-party APIs, I
                  found the experience to be remarkably seamless and
                  invigorating. The effortless integration and resulting
                  aesthetics, alongside the commendable functionality, left me
                  thoroughly content. Admittedly, the back-end aspect pertaining
                  to data preservation presented the most arduous challenge;
                  however, such intricacy only served to further cultivate my
                  enthusiasm.
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
                      I need handlebars to ride this bike
                      <i class="material-icons right">close</i>
                    </span>
                    <p>
                      Utilizing Express Handlebars and MySQL for the first time,
                      this project displays the technolgies working
                      simultaneously together. The application has many use
                      cases but this one in particular is made for users who are
                      looking to build a Personal Computer for themselves for
                      the first time. The application uses MySQL as a relational
                      database to store the user's selected computer parts. The
                      front-end is created using Express Handlebars and uses
                      conditional statements to determine whether the part is
                      bought of still on list. 
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
