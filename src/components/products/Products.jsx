import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

/* eslint @typescript-eslint/no-var-requires: "off" */

import GameCard from '../home/homeComponent/gameCard'
import Search from '../home/homeComponent/search'
import SideBar from './sideBar'

export default function Products () {
    const [data, setItems] = useState([]);
    const [seacrh, setValue] = useState('')
    const axios = require('axios')

    useEffect(() => {
      axios.get('http://localhost:3000/NewGameData')
          .then(function(responce) {
              if (responce) setItems(responce.data)} )
      }, [])
    const searchAction = seacrh  
    const searchMatch = data.filter(word => word.gameName.toLowerCase().match(searchAction.trim()));
    const searchResult = searchMatch.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
    const gameList = data.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)


    function handlChange(e) {
        setValue(e.target.value)
    }
    return (
        <div>
            <div className='side-bar-wrapper'>
                <SideBar />
            </div>
            <div className="home-wrapper product-wrapper">
                <Search seacrh={ seacrh } onChange={handlChange}/>
                <div className='main-wrapper-group main-wrapper-underline'>
                    <p>{ searchAction ? 'Result:' : 'Products' }</p>
                    <div className='main-wrapper-group-grid'>
                    {searchAction ? searchResult : gameList}
                    </div>
                </div>
            </div>
        </div>
    )
}
Products.propTypes = {
    seacrh: PropTypes.any,
  };