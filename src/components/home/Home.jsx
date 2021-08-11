import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import Search from './homeComponent/search'
import NewGame from './homeComponent/newGame'
import Categories from './homeComponent/categories'

export default function Home() {
    const [seacrh, setValue] = useState('')

    function handlChange(e) {
        setValue(e.target.value)
    }
    const categories = <Categories />;
    return (
        <div className="home-wrapper">
            <Search seacrh={ seacrh } onChange={handlChange}/>
            {seacrh ? null : categories}
            <NewGame seacrh={ seacrh }/>
        </div>
    )
}
Home.propTypes = {
    seacrh: PropTypes.any,
  };