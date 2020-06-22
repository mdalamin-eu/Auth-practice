import React,{Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import  { isAuth ,logout } from '../utlis/auth'
class Menu extends Component {

    
     logouta = () =>  {
        console.log('hi', logout)
logout()
    }
  
    
      NotLoggedin = (
    <Fragment>
                     <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
    </Fragment>
    )

     loggedinn = (
        <Fragment>
                 <li>
                    <Link onClick={this.logouta}>Logout</Link>
                </li>
                
    </Fragment>
    )

 render () {
    return(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
               { isAuth() && isAuth().loggedin ? this.loggedinn : this.NotLoggedin}
            </ul>
        </div>
    )
 }
    
}

export default Menu