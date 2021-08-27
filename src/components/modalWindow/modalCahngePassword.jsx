import React from 'react'
import { setModalChangePassword } from '../../features/modal/modalChangePasswordSlice'
import { useDispatch, useSelector} from 'react-redux'
import USER_CHANGE_PASSWORD from '../../api/changePassword' 
import { useState } from 'react'

export default function ModalCahngePassword() {
    const dispatch = useDispatch()
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const [warningIndicator, setWarningIndicator] = useState(false)
    const [successModal, setSuccessModal] = useState(false)

    const changePassword = () => {
        if (newPassword === repeatNewPassword && newPassword > 5) {
            USER_CHANGE_PASSWORD(newPassword)
            setSuccessModal(!successModal)
            
        }
        else {
            setWarningIndicator(!warningIndicator)
        }
    }
    
    return (
        <div className='wrapper-modal-window'>
            {!successModal ?
            <div className='modal-window-profile'>
                <p>Change password</p>
                <button onClick={() => dispatch(setModalChangePassword())} className='close-btn'><p>close</p></button>
                <div className='input-group-profile'>
                    <span>
                        <label htmlFor="password"><p>new password</p></label>
                        <input onChange={(e) => setNewPassword(e.target.value)} className='search-input' type="password" name="" id="password" />
                    </span>
                    <span>
                        <label htmlFor="repeate-password"><p>repeat password</p></label>
                        <input onChange={(e) => setRepeatNewPassword(e.target.value)} className='search-input' type="password" name="" id="repeate-password"/>
                    </span>
                </div>
                <button onClick={changePassword} className='modal-button'><p>change</p></button>
                <aside style={{bottom : warningIndicator ? '0px' : '-120px'}} className='alarm'><p>Password mismatch</p></aside>
            </div>
            :
            <div className='modal-window-profile'>
                <p>Password change!</p>
                <button onClick={() => dispatch(setModalChangePassword())} className='modal-button'><p>OK</p></button>
            </div>}
        </div>
    )
}