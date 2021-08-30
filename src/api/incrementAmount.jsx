const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function INCREMENT_AMOUNT(id, count) {
    axios.patch('http://localhost:3000/Cart/' + id, {
        amount : count
    })
}