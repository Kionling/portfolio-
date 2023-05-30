const express = require("express");
const sequelize = require("sequelize");
const app = express();
const mysql = require("mysql");
const db = require("./models");
const path = require("path");
const routes = require("./routes/html-routes");
const PORT = process.env.PORT || 4000;
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");

dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
})
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(cors());

// Other routes and middleware
// app.use(routes);

function sendMail(recipient, subject, message) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.DESTINATION_EMAIL, // Sender address
      to: recipient, // Recipient address
      subject: subject, // Email subject
      text: message, // Plain text body
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error:", error);
        res.status(500).send("Error sending email.");
      } else {
        console.log("Email sent:", info.response);
        res.status(200).send("Email sent successfully.");
      }
    });
  });
}

app.get("/", (req, res) => {
  sendMail().then((response) =>
    res
      .send(response.message)
      .catch((error) => res.status(500).send(error.message))
  );
});

app.post("/send_email", (req, res) => {
  const { recipient, subject, message } = req.body;

  sendMail(recipient, subject, message)
    .then(() => res.status(200).send("Email sent successfully."))
    .catch((error) => {
      console.log("Error:", error);
      res.status(500).send("Error sending email.");
    });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client", "build")));
}



db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(` 🙌😈🌝  app is now listening on ${PORT}`);
  });
});
