import FIND_USER_DATA from './findUserData'
export default function USER_CHANGE_PASSWORD() { 
    const userData = FIND_USER_DATA()
    const UserID = userData.map(data => data = data.id )
}