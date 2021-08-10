import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import GameCard from './gameCard'

export default function NewGame(props) {
    const [data, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/NewGameData')
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
          )
      }, [])

    const searchResult = props.seacrh
    const gameList = data.map(gameData =>  <GameCard key={gameData.key} gameData={gameData} name={gameData.gameName}/>)
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