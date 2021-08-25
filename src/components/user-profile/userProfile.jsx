import React from 'react'
import { useEffect, useState } from 'react';

/* eslint @typescript-eslint/no-var-requires: "off" */

export default function UserProfile() {
    const axios = require('axios')
    const userName = localStorage.getItem("email")
    const [userImg, setUserImg] = useState('')
    
    return (
        <div className="home-wrapper">
            <div className="main-wrapper-group main-wrapper-underline">
                <span><p style={{display : 'block'}}>Hello {userName}</p></span>
                <div className='profile-content-block'>
                    <section className='profile-img'>
                        <img src="" alt="" />
                        <div className='non-img-profile'></div>
                        <button className='profile-button modal-button'><p>KEK</p></button>
                    </section>
                    <section>
                        <input type="text" className='profile-input search-input' name="" id="" />
                        <input type="text" className='profile-input search-input' name="" id="" />
                    </section>
                    <section>
                        <button className='profile-button modal-button'><p>KEK</p></button>
                        <button className='profile-button modal-button'><p>KEK</p></button>
                    </section>
                </div>
            </div>
        </div>
    )
}