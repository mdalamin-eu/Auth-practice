import React, { Component } from 'react'
import ValidationMessage from './validMgs'
import '../App.css';

 class RegisterForm extends Component {
    state={ 
        firstname:'',firstnameValid:false,
        lastname:'',lastnameValid:false,
        email:'',emailValid:false,
        password:'',passwordValid:false,
        passwordConfirmation:'', passwordConfirmationValid:false,
        phone:'',phoneValid:false,
        address:'',addressValid:false,
        birthdate:'',birthdateValid:false,
        errorsMsg:{}

    }

    handlefirstnameInput =(e)=>{
        this.setState({...this.state, firstname:e.target.value
       },this.validateFirstname)
    }

    validateFirstname =()=>{
        const {firstname} = this.state;
        let errorsMsg = {...this.state.errorsMsg};
        let firstnameValid = true


        if (firstname.length <2){
            firstnameValid = false;
            errorsMsg.firstname= 'Must be firstname at least 2 characers name'
        }
        this.setState({firstnameValid, errorsMsg})
    }




        handlelastnameInput=(e)=>{
            this.setState({...this.state, lastname:e.target.value})
        }
        handleemailInput=(e)=>{
            this.setState({...this.state, email:e.target.value})
        }
   
        handlepasswordInput=(e)=> {
            this.setState({...this.state, password:e.target.value})
           
        }
   
        handlephoneInput=(e)=>{
            this.setState({...this.state, phone:e.target.value})
        }
   
        handleaddressInput=(e)=>{
            this.setState({...this.state, address:e.target.value})
        }
   
        handlebirthdateInput=(e)=>{
            this.setState({...this.state, birthdate:e.target.value})
        }
        
   
   
   
        createAnAccount = (event) =>{
            event.preventDefault()
            console.log(this.state)
        }
   
       render() {
           return (
               <div>
                   <form onSubmit={this.createAnAccount}>
                   <header>
                       Registation Form
                   </header> 
                
                   
                       <div className='from-group'>
                           <ValidationMessage valid={this.state.firstnameValid} message={this.state.errorsMsg.firstname}/>
                           <label htmlFor='firstname'>Firstname</label>
                       <input name='firstname' type="text" id='firstname' className='form-field' 
                       value={this.state.firstname}  onChange={this.handlefirstnameInput } placeholder="enter your firstname"/>
                       </div>
                       <input name='lastname' type="text" value={this.state.lastname}  onChange={this.handlelastnameInput } placeholder="enter your lastname" className="lastnameInput"/>
                       <input name ='email' type="email" value={this.state.email} onChange={this.handleemailInput} placeholder="enter your email" className="emailInput"/>
                       <input name ='password' type="password" value={this.state.password} onChange={this.handlepasswordInput} placeholder="enter your password" className="passwordInput"/>
                       <input name ='phone' type="text" value={this.state.phone} onChange={this.handlephoneInput} placeholder="enter your phone number" className="phoneInput"/>
                       <input name ='address' type="text" value={this.state.address} onChange={this.handleaddressInput} placeholder="enter your address" className="addressInput"/>
                       <input name ='birthdate' type="date" value={this.state.birthdate} onChange={this.handlebirthdateInput} placeholder="enter your birthdate" className="birthdateInput"/>
                       <input type="submit" value="Create An Account" />
                   </form>
               </div>
           );
       }
    }
export default RegisterForm