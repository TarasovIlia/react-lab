import React from 'react';
import PropTypes from 'prop-types';

export default function CloseButton( {onClick} ) {
    return (
        <button onClick={ onClick } className='close-btn'>
            <p>close</p>
        </button>
    )
}
CloseButton.propTypes = {
    onClick : PropTypes.any
}