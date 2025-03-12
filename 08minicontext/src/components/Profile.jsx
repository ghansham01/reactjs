import React , {useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const  {user}= useContext(UserContext)

    if(!user) return <h1>please login</h1>

    return(
        <div>Walcome {user.userN}</div>
    )
}

export default Profile