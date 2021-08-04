import React from 'react';

import PropTypes from 'prop-types';

import Star from './elements/star'

class GameCard extends React.Component {
    render () {
        let starCounter = this.props.gameData.stars
        let stars = [...Array(starCounter)].map((i) => <Star key={i}/>)
        
        return (
            <div className='gameCard'>
                <div><img src={this.props.gameData.imgGame} alt="" /></div>
                <div className='gameDescription'>
                    <h1>{this.props.gameData.gameName}</h1>
                    <p>price: {this.props.gameData.priceGame}{this.props.gameData.currency}</p>
                    <p>description: {this.props.gameData.discription}</p>
                    <p>age: {this.props.gameData.age}</p>
                    <div className='star-game-rate'>{stars}</div >
                </div>
            </div>
        )
    }
}

GameCard.propTypes = {
    gameData: PropTypes.any,
};
export default GameCard