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



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


db.sequelize.sync().then(function() {
    app.listen(PORT, () => {
        console.log(` 🙌😈🌝  app is now listening on ${PORT}`)
        
    })
})
