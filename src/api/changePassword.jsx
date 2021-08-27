/* eslint @typescript-eslint/no-var-requires: "off" */

const axios = require('axios')

export default function USER_CHANGE_PASSWORD(NewUserPassword) { 
    const UserID = localStorage.getItem("userID")

    if (UserID) {
        axios.patch("http://localhost:3000/User/" + UserID, {password : NewUserPassword})
    }
}