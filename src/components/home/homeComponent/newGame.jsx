import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/* eslint @typescript-eslint/no-var-requires: "off" */

import GameCard from './gameCard'

export default function NewGame(props) {
    const [data, setData] = useState([]);
    const axios = require('axios')

    axios.get('http://localhost:3000/NewGameData')
        .then(responce => setData(responce.data) )
 
    const searchAction = props.seacrh

    const searchMatch = data.filter(word => word.gameName.toLowerCase().match(searchAction.trim()));

    const sortByRelease = searchMatch.sort((a, b) => {
        if (a.release > b.release) return -1
        if (a.release < b.release) return 1
        return 0
    })
    const gameList = sortByRelease.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)


    return (
        <div className='main-wrapper-group main-wrapper-underline'>
            <p>{ searchAction ? 'Result:' : 'New games' }</p>
            <div className='main-wrapper-group-grid'>
            {gameList}
            </div>
        </div>
    )
}
NewGame.propTypes = {
    seacrh: PropTypes.any,
  };