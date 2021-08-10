import React from 'react';
import PropTypes from 'prop-types';

import GameCard from './gameCard'
import NewGameData from './data/newGameData'

export default function NewGame(props) {
    const searchResult = props.seacrh
    const gameList = NewGameData.map(gameData =>  <GameCard key={gameData.key} gameData={gameData} name={gameData.gameName}/>)
    return (
        <div className='main-wrapper-group'>
            <p>{ props.seacrh ? null : 'New games' }</p>
            <div className='main-wrapper-group-grid'>
           {searchResult ? gameList.filter(function(item) {searchResult === item}) : gameList}
            </div>
        </div>
    )
}
NewGame.propTypes = {
    seacrh: PropTypes.any,
  };