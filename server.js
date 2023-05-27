const express = require("express");
const sequelize = require("sequelize");
const app = express();
const mysql = require("mysql2");
const db = require("./models")
const path = require("path");
const routes = require("./routes/html-routes")
const PORT = process.env.PORT || 6000;
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const sendEmail = (name, email, message) => {
    const transporter = nodemailer.createTransport({
      service: 'Your Email Service Provider', // e.g., 'Gmail'
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: email,
      to: process.env.DESTINATION_EMAIL,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };
    
      

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(` 🙌😈🌝  app is now listening on ${PORT}`)
        
    })
})
