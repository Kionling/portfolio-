import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  function sendMail(){
    if(recipient && subject && message){
      axios.post("http://localhost:4000/send_email", {
        recipient,
        subject, 
        message 
      }).then(() => alert('Message sent successfully')).catch((error)=> alert(error))
    }
  }
  const resetForm = () => {
    setRecipient('');
    setSubject('');
    setMessage('');
  };


  return (
    <div>
      <h1>Send Email</h1>
      <form onSubmit={sendMail}>
        <label htmlFor="recipient">Recipient:</label>
        <input
          type="email"
          id="recipient"
          name="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea><br /><br />

        <button disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send Email'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
