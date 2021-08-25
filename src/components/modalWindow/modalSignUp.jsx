import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activModalUp } from '../../features/modalUpSlice';
import { userLogIn } from '../../features/userSlice'
/* eslint @typescript-eslint/no-var-requires: "off" */

export default function ModalSignUp ( ) {
    const [userEmail, setEmail] =  useState('');
    const [userPass, setPass] =  useState('');
    const [validation, setValidation] =  useState(false);
    const [validationMail, setValidationMail] =  useState(false);
    const [totalValidation, setTotalValidation] =  useState(false);
    const [validationPass, setValidationPass] =  useState('');
    const [emailUniqueness, setEmailUniqueness] = useState(true)
    const [availableEmail, setAvailableEmail] = useState([])
    const dispatch = useDispatch();
    const axios = require('axios')

    useEffect(() => {
        if (validation && validationMail) {
            setTotalValidation(true)
        }
        else {
            setTotalValidation(false)
        }
    })
    useEffect(() => {
        axios.get('http://localhost:3000/User')
            .then(response => setAvailableEmail(response.data))
            const Email = availableEmail.filter(data => data.email === userEmail)
            

        if (Email.length > 0) {
            setEmailUniqueness(false)
        }
        else {
            setEmailUniqueness(true)
        }
    })

    const sendEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length >=5) {
            setValidationMail(true)
        }
        else {
            setValidationMail(false)
        }
    }

    const validationPassword = (e) => {
        setValidationPass(e.target.value);
        if (e.target.value === userPass && userPass.length >= 5) {
            setValidation(true)
        }
        else (
            setValidation(false)
        )
    }

    const sendPassword = (e) => {
        setPass(e.target.value);
        if (e.target.value.length >= 5 && e.target.value === validationPass) {
            setValidation(true)
        }
        else (
            setValidation(false)
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (totalValidation && emailUniqueness) {
            axios({
                method: 'POST',
                url: 'http://localhost:3000/User',
                data: {
                    email: userEmail,
                    password: userPass
                }
            }),
            axios({
                method: 'POST',
                url: 'http://localhost:3000/SignIn',
                data: {
                    email: userEmail,
                    password: userPass
                }
            })
            window.location.pathname = '/profile'
            dispatch(activModalUp());
        }
    }

    function alarmIndicator() {
        if (validation || !validationPass) {
            return true
        }
        else return false
    }
    function alarmIndicatorEmail() {
        if (emailUniqueness) {
            return true
        }
        else return false
    }
    return (
        <div className='wrapper-modal-window'>
            <div className='modal-window'>
            <button onClick={() => dispatch(activModalUp())} className='close-btn'>
                <p>close</p>
            </button>
                <div className='input-group'>
                    <form action=''>
                        <input onChange={sendEmail} className='search-input' type='email' placeholder='your e-mail' />
                        <input onChange={sendPassword} className='search-input' type='password' placeholder='your password' />
                        <input onChange={validationPassword} className='search-input' type='password' placeholder='repead password' />
                        <aside style={{bottom : alarmIndicator() ?  '-120px' : '0px'}} className='alarm'><p>Password mismatch!</p></aside>
                        <aside style={{bottom : alarmIndicatorEmail() ?  '-120px' : '0px'}} className='alarm'><p>This email is not available</p></aside>
                        <button style={{ opacity : totalValidation ? '1' : '0.4' }} onClick={ handleSubmit } className='modal-button'><p>sign in</p></button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
