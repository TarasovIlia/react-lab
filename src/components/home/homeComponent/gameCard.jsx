import React from 'react';

import PropTypes from 'prop-types';

class GameCard extends React.Component {
    render () {
        return (
            <div className='gameCard'>
                <div><img src={this.props.gameData.imgGame} alt="" /></div>
                <div className='gameDescription'>
                    <h1>{this.props.gameData.gameName}</h1>
                    <p>price: {this.props.gameData.priceGame}{this.props.gameData.currency}</p>
                    <p>discription: {this.props.gameData.discription}</p>
                    <p>age: {this.props.gameData.age}</p>
                    <p>stars: {this.props.gameData.stars}</p>
                </div>
            </div>
        )
    }
}

GameCard.propTypes = {
    gameData: PropTypes.any,
};
export default GameCard