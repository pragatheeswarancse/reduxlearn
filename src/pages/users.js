import React from 'react'
import {useSelector} from 'react-redux'
import User from '../redux/componenet/user'
const Users = () => {
    const users = useSelector((state) => {
        return state.users //users from reducer
    });
    console.log(users)
    return (
      <div>
        <p>user list</p>
      {users.map ((user) => {
         return <User name={user.name} id={user.id} password={user.password} />
       })}
      </div>
    )
};
export default Users;
