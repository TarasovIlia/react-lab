import React from 'react'
import { useEffect, useState } from 'react';
import { setModalChangePassword } from '../../features/modalChangePasswordSlice'
import { useDispatch, useSelector} from 'react-redux'
import SET_USER_NAME from '../../api/setUserName'

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function UserProfile() {
    //set user name
    const SetUserName = SET_USER_NAME()
    const UserName = SetUserName.map(data => data=data.username)

    const axios = require('axios')
    const UserEmail = localStorage.getItem("email")
    const [userImg, setUserImg] = useState('')
    const dispatch = useDispatch()

    const [newUserName, setNewUserName] = useState('')

    return (
        <div className="home-wrapper">
            <div className="main-wrapper-group main-wrapper-underline">
                <span><p style={{display : 'block'}}>Hello {UserName === null ? UserName : UserEmail}</p></span>
                <div className='profile-content-block'>
                    <section className='profile-img'>
                       {userImg ? <img src="" alt="" /> : <div className='non-img-profile'></div>}
                        <button className='profile-button modal-button'><p>change profile img</p></button>
                    </section>
                    <section className='input-section'>
                        <label htmlFor="username"><p>Username</p></label>
                        <input onChange={(e) => setNewUserName(e.target.value)} type="text" className='profile-input search-input' name="" id="username" />
                        <label htmlFor="profile-discription"><p>User discription</p></label>
                        <textarea type="text" className='profile-input search-input' name="" id="profile-discription" />
                    </section>
                    <section className='profile-contorol-button'>
                        <button onClick={SET_USER_NAME(newUserName)} className='profile-button modal-button'><p>save profile</p></button>
                        <button onClick={() => dispatch(setModalChangePassword())} className='profile-button modal-button'><p>change password</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}