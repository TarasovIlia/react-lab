import React from 'react';

import '../style/homeStyle.css'
import './homeComponent/style/categoriesStyle.css'
import './homeComponent/style/newGameStyle.css'

import Search from './homeComponent/search'
import NewGame from './homeComponent/newGame'
import Categories from './homeComponent/categories'

function Home () {
    return (
        <div className="HomeWrapper">
            <Search />
            <Categories />
            <NewGame />
        </div>
    )
}

export default Home