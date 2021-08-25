import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'

/* eslint @typescript-eslint/no-var-requires: "off" */

import GameCard from '../home/homeComponent/gameCard'
import Search from '../home/homeComponent/search'
import SideBar from './sideBar'
import SORT_BY_PARAMS from '../../api/sort-by-params'

export default function Products () {
    const [seacrh, setValue] = useState('')
    const sortParams = useSelector((state) => state.sortCriteriaParams.value)

    const searchAction = seacrh

    const searchMatch =  SORT_BY_PARAMS(sortParams.toLowerCase()).filter(data => data.gameName.toLowerCase().match(searchAction.trim()));
    const FilterResult = searchMatch.map(gameData => <GameCard key={gameData.key} gameData={gameData}/>)

    function handlChange(e) {
        setValue(e.target.value)
    }

    const noResult = <div className='no-result'><h1>no result</h1></div>

    return (
        <div>
            <div className='side-bar-wrapper'>
                <SideBar />
            </div>
            <div className="home-wrapper product-wrapper">
                <Search seacrh={ seacrh } onChange={handlChange}/>
                {FilterResult.length === 0 ? noResult : 
                <div className='main-wrapper-group main-wrapper-underline'>
                    <p>{ searchAction ? 'Result:' : 'Products' }</p>
                    <div className='main-wrapper-group-grid'>
                    {FilterResult}
                    </div>
                </div>}
            </div>
        </div>
    )
}
Products.propTypes = {
    seacrh: PropTypes.any,
  };
