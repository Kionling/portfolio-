import React from "react"
import "../Contact/contact.css"

function Contact(){
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