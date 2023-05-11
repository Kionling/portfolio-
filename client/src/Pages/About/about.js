import React from "react";
import "../About/about.css";

function About() {
  return (
    <div>
      <div className=" #000000 black centerText" id="aboutBanner">
        
        <div className="center">
          <div className="row">
            <div className="col s12 l12">
            <h3 className="bold800 white-text">Born in San Jose, California</h3>

            </div>
          </div>
          <div className="row">
            <div className="col s12 l12">
            <h3 className="bold800 white-text">Raised in Lathrop, California</h3>

            </div>
          </div>
        </div>
      </div>

      <div className="container bold800" id="bottomParagraph">
        <h2 className="bold800">Graduated from Lathrop High School in 2019.</h2>
        <p className="bold800">From August 2015 to May 2019</p>
        <p className="bold800">
          Familar with rigourous courses such as AP Calculus, AP Chemistry, and
          AP Biology.
        </p>
        <p className="bold800">Consistent 3.0 GPA Student</p>
        <h3 className="bold800">
          Graduated from UC Berkeley's Full Stack Web Development Coding
          Bootcamp
        </h3>
        <p className="bold800">
          Graduated receiving certification in my proficiency in Computer
          Science, Programming Technologies, and Full Stack Web Development.
        </p>

        <p className="bold800">
          Passionate Developer always looking to exceed the comfort zones within
          my person.
        </p>
        <p className="bold800">
          Actively looking for entry-level and internship positions that will
          allow me to grow as a Developer and person.
        </p>
        <h3 className="bold800">Currently a Computer Science Major at San Joaquin Delta College.</h3>
        <p className="bold800">To satisy my passion and interest behind the science of Software Engineering, </p>
        <p className="bold800">
        I am continuing my studies at SJDC and looking to transfer to colleges in the Bay area to continue my coding journey.
        </p>
      </div>
    </div>
  );
}
export default About;
