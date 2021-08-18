import React,  { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { activModalUp } from '../../features/modalUpSlice'
import { activModalIn } from '../../features/modalInSlice'
import { userLogIn } from '../../features/userSlice'

import NavigationData from '../data/navigationData'

export default function Header ( {onClick} ) {
    const [data, setItems] = useState([]);
    const [User, setUser] = useState('User001');
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const modalUp = useSelector((state) => state.modalUp.value);
    const user = useSelector((state) => state.user.value);

    useEffect(() => {
        fetch('http://localhost:3000/NavigationData')
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
          ),
          fetch('http://localhost:3000/User/5')
          .then(res => res.json())
          .then(
            (result) => setUser(result.email))
      }, [])

    const ButtonStyleActive = "solid 5px blueviolet";
    const ButtonProfileStyleActive = "solid 2px blueviolet";

    const StyleForBtn =  { borderBottom : ButtonStyleActive }
    const StyleForProfileBtn = { border : ButtonProfileStyleActive }

    let host = window.location.pathname;
    host = host.split("/")[1]

    const navigation = data.map(data  => 
        <Link  to={data.href}  key={data.key}>
            <button
                onMouseLeave={() => setTopPosition(linkClassName = disablePosition)} 
                onMouseEnter={() => setTopPosition(linkClassName = data.title === 'products' ? activePosition : disablePosition)} 
                style={ host === data.title ? StyleForBtn : null }
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
        <Link to="profile"><p style={host === "profile" ? StyleForProfileBtn : null}>{User}</p></Link>
    </div>
const userSignInCart = <div> 
            <img src='https://img.icons8.com/ios-glyphs/30/ffffff/shopping-cart--v1.png' alt="" /><p>{cart}</p>
        </div>

const disablePosition = '-400px' 
const activePosition = '70px';

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
                    {user ?
                        <button className="link-btn sign-up-button">{ userSignInProfile}</button>
                        :
                        <button onClick={ () => dispatch(activModalUp()) }  className="link-btn sign-up-button">{ userDidntSignUp }</button>
                    }
                    {user ? <Link to="cart"><button style={host === "cart" ? StyleForBtn : null} className="link-btn cart-btn">{ userSignInCart}</button></Link> : null}
                    {user ? 
                        <button className="link-btn" onClick={() => {dispatch(userLogIn()); window.location.pathname = '/'}}>
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
