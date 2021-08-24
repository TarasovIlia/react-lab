import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

/* eslint @typescript-eslint/no-var-requires: "off" */

import GameCard from '../home/homeComponent/gameCard'
import Search from '../home/homeComponent/search'
import SideBar from './sideBar'

export default function Products () {
    const [data, setItems] = useState([]);
    const [seacrh, setValue] = useState('')
    const axios = require('axios')
    const genresFilter = useSelector((state) => state.genres.value)
    const ageFilter = useSelector((state) => state.age.value)

    useEffect(() => {
        axios.get('http://localhost:3000/NewGameData')
        .then(function(responce) {
            if (responce) setItems(responce.data)} )
        }, [])

        const searchAction = seacrh

        
        //filter
        const AgeFilter = data.filter(gameData => gameData.age >= ageFilter)
        const GenresFilter = AgeFilter.filter(gameData => gameData.genres.toLowerCase().match(genresFilter))
        const GenresFilterResult = GenresFilter.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
        
        
        //search
        const searchMatch = GenresFilter.filter(word => word.gameName.toLowerCase().match(searchAction.trim()));
        const searchResult = searchMatch.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
        
        const gameList = AgeFilter.map(gameData =>  <GameCard key={gameData.key} gameData={gameData}/>)
        
        const display = genresFilter ? GenresFilterResult : gameList

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
                    {searchAction ? searchResult : display}
                    </div>
                </div>
            </div>
        </div>
    )
}
Products.propTypes = {
    seacrh: PropTypes.any,
  };