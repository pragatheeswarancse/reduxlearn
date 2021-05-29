import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import * as userActions from '../store/action/user'
import { Link } from 'react-router-dom';

const Home = () => {
    const [user, setUser] = useState({
        id:"",
        name:"",
        password:"",
    });
    const dispatch = useDispatch();
    const inputHandler = (event) => {
        const {value, name} = event.target;
        console.log(name, value);
        setUser((prevItems) => {
            return {
                ...prevItems,
                [name]: value,
            }
        })
    }
    const addUser = () => {
        dispatch(userActions.addUser(user));
        setUser({
            id:"",
            name:"",
            password:"",
        })
    }

    return (
        <div>
          <div>
              <h1>add New User</h1>
              <form>
              <input
                type="text"
                name="id"
                placeholder="id"
                onChange={inputHandler}
                value={user.id} 
              />
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={inputHandler}
                value={user.name}
               />
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={inputHandler}
                value={user.password}
               />
               <button type="submit" onClick={addUser}>Add User</button>
               </form>
               <Link to="./users">User Detail</Link>
          </div>
        </div>
    )
}

export default Home