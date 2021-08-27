import React, { useState, useEffect} from 'react';

import GameCard from '../../home/homeComponent/gameCard'

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function Playstation5Componetns () {
    const [data, setItems] = useState([]);
    const axios = require('axios')

    useEffect(() => {
      axios.get('http://localhost:3000/NewGameData')
          .then(request => setItems(request.data))
      })
    const searchMatch = data.filter(word => word.platform.Playstation5 == true);
    const searchResult = searchMatch.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
    return (
        <div className="home-wrapper">
            <div className='main-wrapper-group main-wrapper-underline'>
                <p> Playstation 5 </p>
                <div className='main-wrapper-group-grid'>
                { searchResult }
                </div>
            </div>
        </div>
    )
}