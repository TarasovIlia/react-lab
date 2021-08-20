import React from 'react'
import { setModalChangePassword } from '../../features/modalChangePasswordSlice'
import { useDispatch, useSelector} from 'react-redux'
import USER_CHANGE_PASSWORD from '../../api/changePassword' 
import SET_USER_NAME from '../../api/setUserName'

export default function ModalCahngePassword() {
    const UpdatePassword = USER_CHANGE_PASSWORD()

    const dispatch = useDispatch()
    
    return (
        <div className='wrapper-modal-window'>
            <div className='modal-window-profile'>
                <p>Change password</p>
                <button onClick={() => dispatch(setModalChangePassword())} className='close-btn'><p>close</p></button>
                <div className='input-group-profile'>
                    <span>
                        <label htmlFor="password"><p>password</p></label>
                        <input className='search-input' type="password" name="" id="password" />
                    </span>
                    <span>
                        <label htmlFor="repeate-password"><p>repeate-password</p></label>
                        <input className='search-input' type="password" name="" id="repeate-password"/>
                    </span>
                    <button className='modal-button'><p>change</p></button>
                </div>
            </div>
        </div>
    )
}