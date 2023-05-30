import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Contact/contact.css";

const Contact = () => {
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
      <div className="row #651fff deep-purple accent-3" id="formContainer">
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

            <button className="btn waves-effect waves-light" type="submit">Send Email</button>
          </form>
        </div>
        <div className="col s12 l6" id="imageDiv"></div>
      </div>
    </div>
  );
};

export default Contact;
