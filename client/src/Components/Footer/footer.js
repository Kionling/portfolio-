import React from "react";
import "../Footer/footer.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";

import About from "../../Pages/About/about"
import Home from "../../Pages/Home/home"
function Footer() {
    return (
        <div id="footerContainer" className="#424242 grey darken-3">
            <footer class="page-footer #424242 grey darken-3">
                <div class="container">
                    {/* <h4 className="franklin" id="footerTitle">More Links</h4> */}
                    <div className="row" id="footerLI">
                        <div className="col l2 franklin" id="aboutLI"><Link to="about" className="white-text">About</Link></div>
                        <div className="col l2 franklin"><Link to="contact" className="white-text">Contact</Link></div>
                        <div className="col l2 franklin"><Link to="projects" className="white-text">Projects</Link></div>
                        <div className="col l2 franklin"><Link to="github" className="white-text">Github</Link></div>
                    </div>
                </div>
                <div className="container">
                    <p>Full Stack Developer/Software Engineer</p>
                </div>
                <div id="lowerSec" className="#424242 grey darken-3">
                    <div class="container #424242 grey-text ">
                        © 2023 Daniel Jauregui
                        <a class="grey-text right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}



export default Footer; 
