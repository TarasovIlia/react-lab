import React,  { useState, Component, useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavigationData from '../data/navigationData'

export default function Header () {
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
    //KEK ????
    const navigationCategories = NavigationData[2].categories.map(data => 
        <Link to={data.link} key={data.key}>
            <p style={{color : host === data.link ? 'blueviolet' : null}}>{data.name}</p>
        </Link>)

    const disablePosition = '-500px' 
    const activePosition = '70px';
        
    let [linkClassName, setTopPosition] = useState(disablePosition)

    return (
            <header className="header">
                <h1>Games Market</h1>
                <div className="nav_bar">
                    {navigation}
                    <div className='link' onMouseLeave={() => setTopPosition(linkClassName = disablePosition)} 
                        onMouseEnter={() => setTopPosition(linkClassName = activePosition)}
                        style={{
                        top : linkClassName,
                        }}>
                        {navigationCategories}
                    </div>
                </div>
            </header>
    )
}



