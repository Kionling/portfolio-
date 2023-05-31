import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="container">
      <h1>Under Construction</h1>
    </div>
  );
}

export default Portfolio;
