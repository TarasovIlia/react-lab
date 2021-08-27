const axios = require('axios')
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function DELETE_GAME_CARD(id) {
    axios.delete('http://localhost:3000/NewGameData/' + id)
}