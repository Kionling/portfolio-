import React, {useState, useInterval, useEffect, useRef} from "react"
import moment from "moment"
import "./moment.css"
function Today(){

    const [now, setNow] = useState(moment());

  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setNow(moment());
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
    

    return (
        <div>
            <p>The current date is: </p>
            <p>{now.format("MMMM Do YYYY, h:mm:ss a")}</p>

        </div>

    )
}   

export default Today;