import React, { Component } from 'react'

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

     handleSubmit = (event) =>{
         event.preventDefault()
         console.log(this.state)
     }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input name ='email' type="email" value={this.state.email} onChange={this.handleemailInput} placeholder="enter your email" className="emailInput"/>
                    <input name ='password' type="password" value={this.state.password} onChange={this.handlepasswordInput} placeholder="enter your password" className="passwordInput"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
export default loginForm;