const express = require("express");
const sequelize = require("sequelize");
const app = express();
const mysql = require("mysql");
const db = require("./models")
const path = require("path");
const routes = require("./routes/html-routes")
const PORT = process.env.PORT || 6000;
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const cors = require('cors')
const config = require("./config/config.json")
const environments = require("./.env")
dotenv.config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
  
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // e.g., 'Gmail'
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true
    });
  
    const mailOptions = {
      from: email,
      to: process.env.DESTINATION_EMAIL,
      subject: 'New Contact Message',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error sending email');
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
      }
    });
    
  });
  
  const port = process.env.PORT || 8000;
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(` 🙌😈🌝  app is now listening on ${PORT}`)
        
    })
})
