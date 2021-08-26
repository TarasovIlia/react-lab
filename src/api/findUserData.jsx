const axios = require('axios')
import { useEffect, useState } from 'react'
/* eslint @typescript-eslint/no-var-requires: "off" */
export default function FIND_USER_DATA() {
    const [data, setData] = useState([])
    const user = localStorage.getItem("email")
    
    axios.get('http://localhost:3000/User')
    .then(response => setData(response.data))
    
    const UserData = data.filter(data => data.email === user)
    const UserName = UserData.map(data => data = data.username)
    const UserID = UserData.map(data => data = data.id)
    localStorage.setItem("userID", UserID)
    localStorage.setItem("username", UserName)
}