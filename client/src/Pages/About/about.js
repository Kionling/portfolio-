import React from "react";
import "../About/about.css";

function About() {
  return (
    <div className="defaultText">
      <div className="#000000 black centerText" id="aboutBanner">

        <div className="center">
          <div className="row">
            <div className="col s12 l12">
              <h3 className="white-text">Born in San Jose, California</h3>

            </div>
          </div>
          <div className="row">
            <div className="col s12 l12">
              <h3  className="white-text">Raised in Lathrop, California</h3>

            </div>
          </div>
        </div>
      </div>

      <div className="container " id="bottomParagraph">
        <h2>Graduated from Lathrop High School in 2019.</h2>
        <p>From August 2015 to May 2019</p>
        <p>
          Familar with rigourous courses such as AP Calculus, AP Chemistry, and
          AP Biology.
        </p>
        <p>Consistent 3.0 GPA Student</p>
        <h3>
          Graduated from UC Berkeley's Full Stack Web Development Coding
          Bootcamp
        </h3>
        <p>
          Graduated receiving certification in my proficiency in Computer
          Science, Programming Technologies, and Full Stack Web Development.
        </p>

        <p>
          Passionate Developer always looking to exceed the comfort zones within
          my person.
        </p>
        <p>
          Actively looking for entry-level and internship positions that will
          allow me to grow as a Developer and person.
        </p>
        <h3>Currently a Computer Science Major at San Joaquin Delta College.</h3>
        <p>To satisy my passion and interest behind the science of Software Engineering, </p>
        <p>
          I am continuing my studies at SJDC and looking to transfer to colleges in the Bay area to continue my coding journey.
        </p>
      </div>
    </div>
  );
}
export default About;
