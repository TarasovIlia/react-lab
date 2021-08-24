import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/* eslint @typescript-eslint/no-var-requires: "off" */

import GameCard from './gameCard'

export default function NewGame(props) {
    const [data, setItems] = useState([]);
    const axios = require('axios')

    useEffect(() => {
      axios.get('http://localhost:3000/NewGameData')
          .then(function(responce) {
              if (responce) setItems(responce.data)} )
      }, [])
    const searchAction = props.seacrh

    const searchMatch = data.filter(word => word.gameName.toLowerCase().match(searchAction.trim()));
    const searchResult = searchMatch.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)

    const gameList = data.filter(data => data.release >= 2020 ).map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)

    return (
        <div className='main-wrapper-group main-wrapper-underline'>
            <p>{ searchAction ? 'Result:' : 'New games' }</p>
            <div className='main-wrapper-group-grid'>
           {searchAction ? searchResult : gameList}
            </div>
        </div>
    )
}
NewGame.propTypes = {
    seacrh: PropTypes.any,
  };