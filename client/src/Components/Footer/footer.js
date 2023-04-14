import React from "react";
import "../Footer/footer.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

import About from "../../Pages/About/about"
function Footer() {
    return (
        <div id="footerContainer">
            <footer class="page-footer">
                <div class="container">
                    <h4 className="franklin">Daniel Jauregui</h4>
                    <div className="row">
                        <div className="col l3 franklin"><Link to="about" className="white-text">About</Link></div>
                        <div className="col l3 franklin"><Link to="contact" className="white-text">Contact</Link></div>
                        <div className="col l3 franklin"><Link to="projects" className="white-text">Projects</Link></div>
                        <div className="col l3 franklin"><Link to="github" className="white-text">Github</Link></div>

                    </div>
                </div>
                <div class="footer-copyright">
                    <div class="container white-text">
                        © 2023 Daniel Jauregui
                        <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
            </footer>

        </div>
    )
}



export default Footer; 
