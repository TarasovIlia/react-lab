import React from 'react';

import PropTypes from 'prop-types';

import Star from './elemenst/star'

class GameCard extends React.Component {
    render () {
        let starCounter = this.props.gameData.stars
        let stars = [...Array(parseInt(starCounter))].map((i) => <Star key={i}/>)
        
        return (
            <div className='game-card-wrapper'>
                 <div className='game-card front'>
                    <div><img src={this.props.gameData.imgGame} alt="" /></div>
                    <div className='game-price-and-name'>
                        <div className='row'>
                            <p>{this.props.gameData.gameName}</p>
                            <p>{this.props.gameData.priceGame} {this.props.gameData.currency}</p>
                        </div>
                        <div className='star-game-rate'>{stars}</div >
                    </div>
                </div>
                <div className='game-card back'>
                    <p>description: {this.props.gameData.discription}</p>
                    <p>{this.props.gameData.age}+</p>
                </div>
            </div>
        )
    }
}

GameCard.propTypes = {
    gameData: PropTypes.any,
};
export default GameCard