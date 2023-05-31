import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "../Contact/contact.css";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailCount, setEmailCount] = useState(0);

  useEffect(() => {
    const storedEmailCount = localStorage.getItem("emailCount");
    if (storedEmailCount) {
      setEmailCount(Number(storedEmailCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("emailCount", emailCount.toString());
  }, [emailCount]);

  function sendMail(e) {
    e.preventDefault();
    console.log(recipient, message, subject)
    if (recipient && subject && message) {
      axios
        .post("http://localhost:4000/send_email", {
          recipient,
          subject,
          message,
        }).then(() => {
          resetForm();
          setEmailCount(emailCount + 1);
          console.log(emailCount) // Increment emailCount after successful email sending
        })
        .catch((error) => alert(error))
    }
  }

  const resetForm = () => {
    setRecipient("");
    setSubject("");
    setMessage("");
  };

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
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
};

export default Contact;
