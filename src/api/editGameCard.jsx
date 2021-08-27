const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function EDIT_GAME_CARD(id, data) {
    const name = data[0].gameName
    const img = data[1].imgGame
    const price = data[2].priceGame
    const description = data[3].description
    const genres = data[4].category
    const age = data[5].age
    const XboxOne = data[6].platform.XboxOne
    const Playstation5 = data[6].platform.Playstation5
    const PC = data[6].platform.PC
    axios.patch('http://localhost:3000/NewGameData/' + id, {
        gameName : name,
        imgGame : img,
        priceGame : price,
        discription : description,
        genres : genres,
        age : age,
        platform : {
            XboxOne : XboxOne,
            Playstation5 : Playstation5,
            PC : PC
        }
    })
}