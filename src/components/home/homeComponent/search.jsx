import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Search ({ onChange }){
    
        return (
            <div>
                <input onChange={onChange} className='searchInput' type='text' placeholder='search..' />
            </div>
        )
}
Search.propTypes = {
    onChange: PropTypes.any,
  };
