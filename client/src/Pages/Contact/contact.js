import React, { useState } from "react";
import "../Contact/contact.css";
import axios from "axios"
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/send-email', { name, email, message });
      if (response.status === 200) {
        setStatus('Email sent successfully');
      } else {
        setStatus('Error sending email');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending email');
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 id="title">Contact Me</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}></input>
              <br />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />

            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />

            <button type="submit">Send</button>

          </form>

          {status && <p>{status}</p>}
        </div>
      </div>
    </div>
  );
}

export default Contact;
