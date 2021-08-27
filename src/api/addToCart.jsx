const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function ADD_TO_CART(cartData) {
    axios.post('http://localhost:3000/Cart', {
        gameName : cartData.gameName,
        priceGame : cartData.priceGame,
        platform : cartData.platform
    })
}