import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activModalIn } from '../../features/modalInSlice';
import { userLogIn } from '../../features/userSlice'

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function ModalSignUp ( ) {
    const [userEmail, setEmail] =  useState('');
    const [userPass, setPass] =  useState('');
    const [userData, setUserData] = useState([])
    const [warningIndicator, setWarningIndicator] = useState(false)
    const axios = require('axios')

    const sendEmail = (e) => {
        setEmail(e.target.value)
    }
    const sendPass = (e) => {
        setPass(e.target.value)
    }
    const dispatch = useDispatch();

    function userAuthorization(e) {
        e.preventDefault()
        axios.get('http://localhost:3000/User')
        .then(response => {
            setUserData(response.data)
            const userValidationEmail = userData.filter(data => data.email === userEmail)
            const userValidationPass = userValidationEmail.filter(data => data.password === userPass)
            if (userValidationEmail.length === 1 && userValidationPass.length === 1) {
                localStorage.setItem("email", userEmail)
                dispatch(activModalIn());
                window.location.pathname = '/'
            }
            else {
                setWarningIndicator(true)
                return false
            }
        })
    }

    return (
        <div className='wrapper-modal-window'>
            <div className='modal-window'>
            <button onClick={() => dispatch(activModalIn())} className='close-btn'>
                <p>close</p>
            </button>
                <div className='input-group'>
                    <form action=''>
                        <input onChange={sendEmail} className='search-input' type='email' placeholder='your e-mail' />
                        <input onChange={sendPass} className='search-input' type='password' placeholder='your password' />
                        <aside style={{bottom : warningIndicator ? '0px' : '-120px'}} className='alarm'><p>invalid user or password</p></aside>
                        <button style={{ opacity : userEmail.length > 5 ? '1' : '0.4' }} onClick={userAuthorization} className='modal-button'><p>sign in</p></button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
