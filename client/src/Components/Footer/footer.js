import React from "react";
import "./footer.css"

function Footer(){
    return(
            
        <footer className=" page-footer #424242 grey darken-3">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text" id="footerTitle">Daniel Jauregui</h5>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul id="footerList">
                  <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Projects</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Github</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container white-text">
            © 2023 Daniel Jauregui
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
        
    )
}

export default Footer;  