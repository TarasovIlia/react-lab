import { useState } from 'react'
const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function GET_USER_BY_ID(id) {
    const [data, setData] = useState([])
    axios.get('http://localhost:3000/NewGameData') 
        .then(response => setData(response.data))
    const gameData = data.filter( data => data.key === id)
    return gameData
}