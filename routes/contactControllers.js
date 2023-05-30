const express = require('express')
const router = require('express').Router()
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'Gmail', // Specify your SMTP server address
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email address
      pass: process.env.EMAIL_PASSWORD// Your email password or application-specific password
    }
  });
  
  router.post('/', (req, res) => {
    const { recipient, subject, text } = req.body;
  
    const mailOptions = {
       from: process.env.DESTINATION_EMAIL, // Sender address
        to: recipient, // Recipient address
        subject: subject, // Email subject
        text: text // Plain text body
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error:', error);
        res.status(500).send('Error sending email.');
      } else {
        console.log('Email sent:', info.response);
        res.status(200).send('Email sent successfully.');
      }
    });
  });
  