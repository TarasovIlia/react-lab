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
        const PlatformFilterPC = data.filter(data => data.platform.PC === true)
        const PlatformFilterXboX = data.filter(data => data.platform.XboxOne === true)
        const PlatformFilterPS5 = data.filter(data => data.platform.Playstation5 === true)
        const PlatformFilter = data
        const AgeFilter = PlatformFilter.filter(data => data.age >= ageFilter)
        const GenresFilter = AgeFilter.filter(data => data.genres.toLowerCase().match(genresFilter))
        const searchMatch = GenresFilter.filter(data => data.gameName.toLowerCase().match(searchAction.trim()));
        
        const Sort = searchMatch.sort((a,b) => {
           if ( a.gameName > b.gameName ) return 1
           if ( a.gameName < b.gameName ) return -1
           return 0
        })
        // const SortPrice = searchMatch.sort((a,b) => {
        //     if ( a.priceGame > b.priceGame ) return 1
        //     if ( a.priceGame < b.priceGame ) return -1
        //     return 0
        //  })
        //  const SortRating = searchMatch.sort((a,b) => {
        //     if ( a.stars > b.stars ) return 1
        //     if ( a.stars < b.stars ) return -1
        //     return 0
        //  })

        const FilterResult = Sort.map(gameData => <GameCard key={gameData.key} gameData={gameData}/>)

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
                    {FilterResult}
                    </div>
                </div>
            </div>
        </div>
    )
}
Products.propTypes = {
    seacrh: PropTypes.any,
  };