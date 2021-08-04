import React from 'react';

import GameCard from './gameCard'
import NewGameData from './data/newGameData'

class NewGame extends React.Component {
    constructor() {
        super()
        this.state = {
            gameData : NewGameData
        }
    }
    render() {
        let gameList = this.state.gameData.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
        return (
            <div className='main-wrapper-group'>
                <p>New games</p>
                <div className='main-wrapper-group-grid'>
                   {gameList}
                </div>
            </div>
        )
    }
}
export default NewGame; 