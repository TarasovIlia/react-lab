const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function REMOVE_FROM_CART(id) {
    if (id) axios.delete('http://localhost:3000/Cart/' + id)
} 