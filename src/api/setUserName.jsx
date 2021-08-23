import FIND_USER_DATA from "./findUserData";
import { useState } from "react";
/* eslint @typescript-eslint/no-var-requires: "off" */

const axios = require('axios')

export default function SET_USER_NAME(NewUserName) {
    const UserID = localStorage.getItem("userID")

    if (UserID) {
        axios.patch("http://localhost:3000/User/" + UserID, {username : NewUserName})
    }
}