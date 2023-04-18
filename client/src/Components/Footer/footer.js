import React from "react";
import "../Footer/footer.css"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
function Footer() {
    return (
        <footer className="page-footer #7c4dff deep-purple accent-2">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Daniel Jauregui</h5>
                        <p className="grey-text text-lighten-4">Full Stack Developer/Software Engineer</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Support me!</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/kionling/" target="_blank">LinkedIn</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/Kionling" target="_blank">Github</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://www.buymeacoffee.com/Kionlingg">Buy Me Coffee!</a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2023 Daniel Jauregui
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}



export default Footer; 
