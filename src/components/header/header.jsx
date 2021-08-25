import React,  { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { activModalUp } from '../../features/modal/modalUpSlice'
import { activModalIn } from '../../features/modal/modalInSlice'
import { setUserLogIn } from '../../features/userLogInData/userSlice'

/* eslint @typescript-eslint/no-var-requires: "off" */

import NavigationData from '../data/navigationData'

export default function Header (  ) {
    const userLogIn = localStorage.getItem('userLogIn')
    const userName = localStorage.getItem('username')
    const userMail = localStorage.getItem('email')
    const [data, setItems] = useState([]);
    const dispatch = useDispatch();
    
    const axios = require('axios')
    axios.get('http://localhost:3000/NavigationData')
        .then(function (response) {
            setItems(response.data);
        })

    //style
    const buttonStyleActive = "solid 5px blueviolet";
    const buttonProfileStyleActive = "solid 2px blueviolet";

    const styleForBtn =  { borderBottom : buttonStyleActive }
    const styleForProfileBtn = { border : buttonProfileStyleActive }

    let host = window.location.pathname;
    host = host.split("/")[1]
    //...


const navigation = data.map(data  => 
    <Link  to={data.href}  key={data.key}>
        <button
            onMouseLeave={() => setTopPosition(linkClassName = disablePosition)} 
            onMouseEnter={() => setTopPosition(linkClassName = data.title === 'products' ? activePosition : disablePosition)} 
            style={ host === data.title ? styleForBtn : null }
            className="link-btn">
            <p>{data.title}</p>
        </button>
    </Link>)

const navigationCategories = NavigationData[2].categories.map(data => 
    <Link to={data.link} key={data.key}>
        <p style={{color : host === data.link ? 'blueviolet' : null}}>{data.name}</p>
    </Link>)

const cart = 0
const userDidntSignUp = <p>sign up</p>
const userSignInProfile = <div>
        <Link to="profile"><p style={host === "profile" ? styleForProfileBtn : null}>{userName || userMail}</p></Link>
    </div>
const userSignInCart = <div> 
            <img src='https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png' alt="" /><p>{cart}</p>
        </div>

const disablePosition = '-400px' 
const activePosition = '70px';

const LogOut = () => {
    localStorage.removeItem("email")
    localStorage.removeItem("username")
    localStorage.removeItem("userID")
    localStorage.removeItem("userLogIn")
    window.location.pathname = '/'
}

let [linkClassName, setTopPosition] = useState(disablePosition)

    return (
            <header className="header">
                <h1>Games Market</h1>
                <div className="nav_bar">
                   
                    {navigation}
                    <div className='products-link' onMouseLeave={() => setTopPosition(linkClassName = disablePosition)} 
                        onMouseEnter={() => setTopPosition(linkClassName = activePosition)}
                        style={{
                        top : linkClassName,
                        }}>                           
                        {navigationCategories}
                    </div>
                    {userLogIn ?
                        <button className="link-btn sign-up-button">{ userSignInProfile}</button>
                        :
                        <button onClick={ () => dispatch(activModalUp()) }  className="link-btn sign-up-button">{ userDidntSignUp }</button>
                    }
                    {userLogIn ? <Link to="cart"><button style={host === "cart" ? styleForBtn : null} className="link-btn cart-btn">{ userSignInCart }</button></Link> : null}
                    
                    {userLogIn ? 
                        <button className="link-btn" onClick={LogOut}>
                        <img src="https://img.icons8.com/ios-glyphs/30/ffffff/exit.png"/></button>
                        :
                        <button onClick={ () => dispatch(activModalIn()) } className="link-btn sign-up-button"><p>sign in</p></button> }
                </div>
            </header>
    )
}
Header.propTypes = {
    onClick : PropTypes.any,
}
