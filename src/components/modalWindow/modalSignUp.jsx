import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { activModalUp } from '../../features/modalUpSlice';
import { userLogIn } from '../../features/userSlice'

export default function ModalSignUp ( ) {
    const [userEmail, setEmail] =  useState('');
    const [userPass, setPass] =  useState('');
    const [validation, setValidation] =  useState(false);
    const [validationMail, setValidationMail] =  useState(false);
    const [totalValidation, setTotalValidation] =  useState(false);
    const [validationPass, setValidationPass] =  useState('');
    const dispatch = useDispatch();
    const modalUp = useSelector((state) => state.modalUp.value)
    const user = useSelector((state) => state.user.value)

    useEffect(() => {
        if (validation && validationMail) {
            setTotalValidation(true)
        }
        else {
            setTotalValidation(false)
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
        if (totalValidation) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({  
                    email: userEmail,
                    password: userPass
                })
            };
            fetch('http://localhost:3000/User', requestOptions);
            dispatch(activModalUp());
            dispatch(userLogIn());

        }
    }

    function alarmIndicator() {
        if (validation || !validationPass) {
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
                        <button style={{ opacity : totalValidation ? '1' : '0.4' }} onClick={ handleSubmit } className='modal-button'><p>sign in</p></button>
                    </form>
                </div>
            </div> 
        </div>
    )
}
