import { useState } from 'react'

const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function GET_CART_ITEM() {
    const [data, setData] = useState([])
    axios.get('http://localhost:3000/Cart')
    .then((responce) => setData(responce.data));

    return data
}