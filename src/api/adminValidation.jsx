export default function ADMIN_CHECKOUT () {
    const email = localStorage.getItem("email")
    if (email === 'adminPage') return true
    return false
}