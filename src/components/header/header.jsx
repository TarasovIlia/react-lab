import React,  { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavigationData from '../data/navigationData'

export default function Header ( {onClick} ) {
    const [data, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

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
          )
      }, [])


    const ButtonStyleActive = "solid 5px blueviolet";
    const StyleForBtn =  { borderBottom : ButtonStyleActive }

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


const userDidntSignUn = <p>sign up</p>
const userSignInProfile = <p>User Name</p> //KEK
const userSignIn = false //true or false

function kek() {
    alert('вы не KEK')
}
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
                    <button className="link-btn sign-up-button" onClick={ userSignIn ? kek : onClick }>{userSignIn ? userSignInProfile : userDidntSignUn}</button>
                    { userSignIn || <button className="link-btn sign-up-button" onClick={ onClick }><p>sign in</p></button>}
                </div>
            </header>
    )
}
Header.propTypes = {
    onClick : PropTypes.any,
}


