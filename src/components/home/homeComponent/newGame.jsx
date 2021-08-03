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
            <div className='mainWrapper_Group'>
                <p>New games</p>
                <div className='WrapperGame_Group_grid'>
                   {gameList}
                </div>
            </div>
        )
    }
}
export default NewGame; 