const sendMail = require("../config/email")

module.exports = {
    sendMailController: function(req,res){
        console.log("Config function is responding with ", req.body)
        sendMail(req.body)
        
    }
}