import axios from "axios";

export default {
    sendMail: function(postData){
        console.log("This is the util")
        return axios.post("/send_email", postData)
    }
}