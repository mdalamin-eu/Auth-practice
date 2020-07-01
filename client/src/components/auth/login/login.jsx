import React, { Component } from 'react'

import { useHistory, withRouter } from "react-router-dom";
import { Redirect } from 'react-router'
import { authenticate , isAuth} from '../../utlis/auth'
import {connect} from 'react-redux'
import { LoginUser } from '../../Actions/action'
 class loginForm extends Component {
     state = {
         email:'',
         password:''
     }
     handleemailInput = (e) => {
         this.setState({...this.state,email:e.target.value})
     }
     handlepasswordInput = (e)=>{
         this.setState({...this.state,password:e.target.value})
     }

     componentDidMount() {
         if(isAuth() && isAuth().loggedin) {
this.props.history.push('/')
         }
     }

     handleSubmit = (event) =>{
         event.preventDefault()
         const {email, password}= this.state
         const data ={ email, password}
         this.props.LoginUser(data)
         
     }
    render() {
        return (
            <div className="App">
                <header>
                    Login Form
                </header>
                
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input name ='email' type="email" value={this.state.email} onChange={this.handleemailInput} placeholder="enter your email" className="emailInput"/>
                    </div>
                    <div className="form-group">
                    <input name ='password' type="password" value={this.state.password} onChange={this.handlepasswordInput} placeholder="enter your password" className="passwordInput"/>
                    </div>
                    <input type="submit" value="Submit"/>
                    {console.log(isAuth())}
     {JSON.stringify(isAuth())}
                </form>
                
            </div>
        )
    }
}

const mapStateToProps= (state)=>{
    return{
        LogginUser:state.appState.LogginUser
    }
}
export default connect(mapStateToProps,{LoginUser} )(withRouter(loginForm));