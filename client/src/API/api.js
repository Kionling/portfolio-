import axios from "axios"

export default {
    sendEmail: function(formData){
        return axios.post("/send_email", formData)
    }
}