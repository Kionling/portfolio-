import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Contact/contact.css";
import API from "../../API/api"
function Contact(){
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();


  function resetForm(){
      emailRef.current.value = ''
      subjectRef.current.value = ''
      messageRef.current.value = ''
  }

  function sendMail(event){
    event.preventDefault();
    let postData = {
      email: emailRef.current.value, 
      subject: subjectRef.current.value, 
      message: messageRef.current.value
    }
    console.log(postData)
    API.sendMail(postData).then((res) =>{
      console.log(res)
      resetForm();
    })
  }
  
  
  


  return (
    <div>
      <div className="row #7986cb indigo lighten-1" id="formContainer">
        <div className=" col s12 l6">
          <h1 id="title" className="container">
            Send Email
          </h1>
          <form onSubmit={sendMail} className="container">
            <label htmlFor="recipient" className="black-text">
              Your Email:
            </label>
            <input
              type="email"
              id="recipient"
              name="recipient"
              ref={emailRef}
              required
            />
            <br />
            <br />

            <label htmlFor="subject" className="black-text">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              ref={subjectRef}
              required
            />
            <br />
            <br />

            <label htmlFor="message" className="black-text">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              ref={messageRef}
              required
            ></textarea>
            <br />
            <br />

            <button className="btn waves-effect waves-dark black-text  #3f51b5 indigo" type="submit" id="sendButton">Send Email</button>
          </form>
        </div>
        <div className="col s12 l6" id="imageDiv"></div>
      </div>
      <div className="row container" id="contact2">
       <div className="col s6 l3">
        <p id="phoneNum">To Contact Me In Another Way Call (209)-395-9325📱 <br></br> Open To Call Between 7AM-6PM PST.</p>
       </div>
       <div className="col s6 offset-l3">
        <p id="feelFree">Feel free to follow me here!</p>
        <ul className="listStart">
          <li className="listText"><a href="https://www.instagram.com/kionlingg/">Instagram 🎥</a></li>
          <li className="listText"><a href="https://github.com/Kionling">Github👨‍💻</a></li>
          <li className="listText"><a href="https://www.youtube.com/channel/UCn2WHNEZLdkWNx1dbkLRFpA">YouTube 🔬</a></li>
        </ul>
       </div>
      </div>
      <div className="row container">
        <div className="col l12 center">
          <h1 id="thankYou">Thank You For Contacting Me!</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
