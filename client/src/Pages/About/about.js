import React from "react"
import "../About/about.css"

function About(){
    return(
        <div>
      

      <div className=" #000000 black" id="aboutBanner">
        <div className="row">
        <h2 className="bold800 white-text row">Born in San Jose, California</h2>
        </div>
        <div className="row">
        <h2 className="bold800 white-text row">Raised in Lathrop, California</h2>
        </div>

      </div>

      <div className="container" id="bottomParagraph">
        <h2 className="bold800">Graduated from Lathrop High School in 2019.</h2>
        <p className="bold800">
          From August 2015 to May 2019 
        </p>
        <p className="bold800">Familar with rigourous courses such as AP Calculus, AP Chemistry, and AP Biology.</p>
       <p  className="bold800">Consistent 3.0 GPA Student</p>
          <h3 className="bold800">
            Graduated from UC Berkeley's Full Stack Web Development Coding Bootcamp
          </h3>
          <p className="bold800">Graduated receiving certification in my proficiency in Computer Science, Programming Technologies, and Full Stack Web Development.</p>
        
        <p className="bold800">
          Passionate Developer always looking to exceed the comfort zones within my person.
        </p>
        <p className="bold800">
          Actively looking for entry-level and internship positions that will allow me to grow as a Developer and person.
        </p>
        <p className="bold800"></p>
      </div>
    </div>
    )
}
export default About;