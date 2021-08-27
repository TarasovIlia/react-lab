import React from 'react';
import PC from '../../../icon/icons8-microsoft.svg'
import XboX from '../../../icon/icons8-xbox.svg'
import PS5 from '../../../icon/icons8-playstation.svg'
import ADD_TO_CART from '../../../api/addToCart';
import ADMIN_CHECKOUT from '../../../api/adminValidation';
import { useDispatch } from 'react-redux';
import { activModalEdit } from '../../../features/modal/modalEdit'
import { setGameId } from '../../../features/modal/gameIdSlice'
 
import PropTypes from 'prop-types';

import Star from './elemenst/star'

export default function GameCard (props) {
    const dispatch = useDispatch()
    const admin = ADMIN_CHECKOUT() 
    let starCounter = props.gameData.stars
    let stars = [...Array(parseInt(starCounter))].map((i) => <Star key={i}/>)

    const editItem = () => {
        dispatch(activModalEdit())
        dispatch(setGameId(props.gameData.key))
    }
            
    return (
        (<div className='game-card-wrapper'>
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
                <button onClick={() => ADD_TO_CART(props.gameData)} className="modal-button"><p>add to cart</p></button>
                { admin ? <button onClick={editItem} className="modal-button"><p>edit</p></button> : null}
                <p>{props.gameData.age}+</p>
            </div>
        </div>)
    )
}

GameCard.propTypes = {
    gameData: PropTypes.any,
    key: PropTypes.number
};