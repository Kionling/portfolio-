const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD
    }
});

function mailOptions(form) {
    let mailOptions = {
    from: form.recipient, // Sender address
    to: process.env.DESTINATION_EMAIL, // Recipient address
    subject: form.subject, // Email subjecta
    text: form.message,
    html: `<h1>${form.recipient}</h1><p>${form.subject}</p><p>${form.message}</p>` // Plain text body
    }
    return mailOptions
  };


function sendMail(form){
    console.log("in the send mail function: ", form)
    if(form){
        transporter.sendMail(mailOptions(form), function (error, info){
            if(error){
                console.log(error)
            }
            else{
                console.log("email sent" + info.response)
            }
        })
    }
}

module.exports = sendMail;