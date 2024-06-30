import React,{useContext} from 'react'
import { UserContext } from '../context/UserContext'
const UserDisplay = ()=>{
    const {username} = useContext(UserContext);
    return (
        <div>
            <p>
                Current user: {username}
            </p>
        </div>
    )
}
export default UserDisplay;