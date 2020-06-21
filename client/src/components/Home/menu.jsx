import React from 'react'
import {Link} from 'react-router-dom'
import  { logout } from '../utlis/auth'
const Menu = () =>{
    const logouta = () =>  {
        console.log('hi', logout)
logout()
    }
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link onClick={logouta}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu