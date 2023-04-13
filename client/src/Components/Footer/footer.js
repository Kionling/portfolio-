import React from "react";
import "../Footer/footer.css"
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div id="footerContainer">
            <footer class="page-footer">
                <div class="container">
                    <h4 className="franklin">Daniel Jauregui</h4>
                    <div className="row">
                        
                       

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
