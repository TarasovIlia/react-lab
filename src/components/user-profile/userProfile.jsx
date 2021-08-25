import React from 'react'
import { useEffect, useState } from 'react';
import { setModalChangePassword } from '../../features/modal/modalChangePasswordSlice'
import { useDispatch, useSelector} from 'react-redux'
import FIND_USER_NAME from "../../api/setUserName";
import FIND_USER_DATA from "../../api/findUserData";


/* eslint @typescript-eslint/no-var-requires: "off" */

export default function UserProfile() {
    FIND_USER_DATA()
    const dispatch = useDispatch()
    //user data
    const UserName = localStorage.getItem("username")
    const UserID = localStorage.getItem("userID")
    const UserEmail = localStorage.getItem("email")
    

    const [userImg, setUserImg] = useState('')
    
    const [NewUserName, setNewUserName] = useState('')

    const UpdateUserName = () => {
        if (NewUserName) {
            setNewUserName('')
            FIND_USER_NAME(NewUserName)
            window.location.pathname = '/profile'
        }
    }

    
    return (
        <div className="home-wrapper">
            <div className="main-wrapper-group main-wrapper-underline">
                <span><p style={{display : 'block'}}>Hello {UserName || UserEmail}</p></span>
                <div className='profile-content-block'>
                    <section className='profile-img'>
                       {userImg ? <img src="" alt="" /> : <div className='non-img-profile'></div>}
                        <button className='profile-button modal-button'><p>change profile img</p></button>
                    </section>
                    <section className='input-section'>
                        <label htmlFor="username"><p>Username</p></label>
                        <input onChange={(e) => setNewUserName(e.target.value)} value={NewUserName} type="name" className='profile-input search-input' name="" id="username" />
                        <label htmlFor="profile-discription"><p>User discription</p></label>
                        <textarea type="text" className='profile-input search-input' name="" id="profile-discription" />
                    </section>
                    <section className='profile-contorol-button'>
                        <button onClick={UpdateUserName} className='profile-button modal-button'><p>save profile</p></button>
                        <button onClick={() => dispatch(setModalChangePassword())} className='profile-button modal-button'><p>change password</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}