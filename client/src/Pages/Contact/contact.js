import React, {useState} from "react"
import "../Contact/contact.css"



function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
          });
    
          const result = await response.text();
          setStatus(result);
        } catch (error) {
          console.error(error);
          setStatus('Error sending message');
        }
      };
    
    return(
        <div>
            <div className="container">
                <div className="row">
                <h1 id="title">Contact Me</h1>
                <form>
                     <label for="name">Name:</label>
                     <input type="text" name="name" id="name" required></input>
                     <label for="email">Email:</label>
                     <input type="email" name="email" id="email" required></input>
                     <label for="message">Message:</label>
                     <textarea name="message" id="message" required></textarea>
                     <input type="submit" value="Send"></input>
                     </form>
            </div>
            </div>
        </div>
    )
}

export default Contact;