import React, { useState, useEffect} from 'react';

import GameCard from '../../home/homeComponent/gameCard'

export default function Playstation5Componetns () {
    const [data, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3000/NewGameData')
          .then(res => res.json())
          .then(
            (result) => {
              setItems(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
              }
          )
      }, [])
    const searchMatch = data.filter(word => word.platform["Playstation 5"] == true);
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