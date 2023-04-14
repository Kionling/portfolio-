import {React, useEffect} from "react"
import {Link , useLocation} from "react-router-dom"
import "./navbar.css" 

function handleUrlChange() {
    console.log('Current URL:', window.location.href);
  }
  
function Navbar() {
    const location = useLocation();
    useEffect(() => {
        handleUrlChange();
      }, [location]);
    return (
        <div>
      <div class="container">
        <div class="row">
          <div class="col s9">
          
            <h3 id="nav-banner">
              <Link to="/" class="black-text">
                Daniel Jauregui
              </Link>
            </h3>
          </div>
        </div>
        <nav class="z-depth-0">
          <div class="nav-wrapper #ffffff white ">
            <a href="#" class="brand-logo center"></a>
            <ul id="nav-mobile" class="left">
              
              <li>
                <Link to="/Portfolio" className="black-text franklin">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" className="black-text franklin">About</Link>
              </li>
              <li>
                <Link to="/contact" className="black-text franklin">Contact</Link>
              </li>
              {/* <li>
                <Link to="/resume" className="black-text">Resume</Link>
              </li> */}

              
            </ul>
          </div>
        </nav>
      </div>
      </div>
    )
    
}


export default Navbar;