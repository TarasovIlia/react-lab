import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export default function ModalSignUp ( {onClick} ) {
    const [userEmail, setEmail] =  useState('');
    const [userPass, setPass] =  useState('');

    const sendEmail = (e) => {
        setEmail(e.target.value)
    }

    const sendPassword = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({  email: userEmail,
                                    password: userPass
        })
        };
        fetch('http://localhost:3000/UserTest/1', requestOptions);
        alert('great job! ' + userEmail);
        onClick()
    }
    return (
        <div className='wrapper-modal-window'>
            <div className='modal-window'>
            <button onClick={onClick} className='close-btn'>
                <p>close</p>
            </button>
                <div className='input-group'>
                    <form action=''>
                        <input onChange={sendEmail} className='search-input' type='email' placeholder='your e-mail' />
                        <input onChange={sendPassword} className='search-input' type='password' placeholder='your password' />
                        <button onClick={handleSubmit} className='modal-button'><p>sign in</p></button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
ModalSignUp.propTypes = {
    onClick : PropTypes.any,
    props :  PropTypes.any,
    modalState :  PropTypes.any,
}