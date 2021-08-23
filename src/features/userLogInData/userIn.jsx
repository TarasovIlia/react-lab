import { userLogIn } from './userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function UserIN() {
    
    const [user, setUser] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        setUser(localStorage.getItem('email'))
    })
    if (user) {
        dispatch(userLogIn(true))
    }
    else {
        dispatch(userLogIn(false))
    }
}