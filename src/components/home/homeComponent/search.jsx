import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function Search ( {onChange} ){
    const [seacrh, setValue] = useState('')
    const [data, setItems] = useState([]);
    const axios = require('axios')
    
    function handlChange(e) {
        setValue(e.target.value)
    }
    useEffect(() => {
        axios.get('http://localhost:3000/NewGameData')
          .then( function(require) {setItems(require.data)})
      })
    const searchMatch = data.filter(word => word.gameName.toLowerCase().match(seacrh.trim()));
    const searchResult = searchMatch.map(data => <p key={data.key}>{data.gameName}</p>)

    const noMatch = <div className="no-result-animation-wrapper"><div className="no-result-animation"></div><p>no result</p></div>
    
        return (
            <div style={{position : 'relative'}}>
                <input onChange={ (e) => { handlChange(e); onChange(e);} }  className='search-input main-page' type='text' placeholder='search..' />
                <aside style={{ display : seacrh ? 'block' : "none"  }} className="search-help">{searchResult == 0 ? noMatch : searchResult}</aside>
            </div>
        )
}
Search.propTypes = {
    onChange : PropTypes.any,
    seacrh : PropTypes.string,
  };
