import React from 'react';
import PC from '../../../icon/icons8-microsoft.svg'
import XboX from '../../../icon/icons8-xbox.svg'
import PS5 from '../../../icon/icons8-playstation.svg'
import ADD_TO_CARD from '../../../api/addToCard';

import PropTypes from 'prop-types';

import Star from './elemenst/star'

export default function GameCard (props) {
        let starCounter = props.gameData.stars
        let stars = [...Array(parseInt(starCounter))].map((i) => <Star key={i}/>)
        
        return (
            <div onClick={() => ADD_TO_CARD(props.gameData)} className='game-card-wrapper'>
                 <div className='game-card front'>
                    <div className='icon-container'>
                        { props.gameData.platform.PC ? <img className="platform-icon" src={PC} alt="" /> : null }
                        { props.gameData.platform.XboxOne ? <img className="platform-icon" src={XboX} alt="" /> : null }
                        { props.gameData.platform.Playstation5 ? <img className="platform-icon" src={PS5} alt="" /> : null }
                    </div>
                    <div><img src={props.gameData.imgGame} alt="" /></div>
                    <div className='game-price-and-name'>
                        <div className='row'>
                            <p>{props.gameData.gameName}</p>
                            <p className="price">{props.gameData.priceGame} {props.gameData.currency}</p>
                        </div>
                        <div className='star-game-rate'>{stars}</div >
                    </div>
                </div>
                <div className='game-card back'>
                    <p>description: {props.gameData.discription}</p>
                    <p>{props.gameData.age}+</p>
                </div>
            </div>
        )
    }

GameCard.propTypes = {
    gameData: PropTypes.any,
};
