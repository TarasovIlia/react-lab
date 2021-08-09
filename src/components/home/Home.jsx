import React from 'react';

import Search from './homeComponent/search'
import NewGame from './homeComponent/newGame'
import Categories from './homeComponent/categories'

export default function Home (props) {
    return (
        <div className="HomeWrapper">
            <Search />
            <Categories />
            <NewGame />
        </div>
    )
}