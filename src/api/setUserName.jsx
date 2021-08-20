import FIND_USER_DATA from "./findUserData";
/* eslint @typescript-eslint/no-var-requires: "off" */

const axios = require('axios')

export default function SET_USER_NAME(UserName) {
    const UserData = FIND_USER_DATA()
    const UserID = UserData.map(data => data = data.id)
    if (UserData, UserID) {
        axios.patch("http://localhost:3000/User/" + UserID, {username : UserName})
    }
    return UserData
}