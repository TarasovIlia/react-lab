const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function EDIT_GAME_CARD(id, data) {
    const name = data[0].gameName
    const img = data[1].imgGame
    const price = data[2].priceGame
    const description = data[3].description
    const genres = data[4].category
    const age = data[5].age
    axios.patch('http://localhost:3000/NewGameData/' + id, {
        gameName : name,
        imgGame : img,
        priceGame : price,
        discription : description,
        genres : genres,
        age : age,
    })
}