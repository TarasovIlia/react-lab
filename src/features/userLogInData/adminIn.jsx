import { useDispatch, useSelector } from 'react-redux'
import { setAdminSignIp } from './adminSlice'

export default function ADMIN_CHECKOUT() {
    const adminIn = useSelector((state) => state.admin.value)
    const dispatch = useDispatch()
    const email = localStorage.getItem('email')
    const setAdmin = () => dispatch(setAdminSignIp(true))
    const unSetAdmin = () => dispatch(setAdminSignIp(false))
    if (email === "adminPage") setAdmin
    else unSetAdmin
    console.log(adminIn)
}