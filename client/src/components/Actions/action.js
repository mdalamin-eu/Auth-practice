import {REGISTER_USER, REGISTER_USER_ERRORS, LOGIN_USER, LOGIN_USER_ERRORS} from './Types'
import Axios from 'axios';
import {createMemoryHistory} from 'history'
import {authenticate, isAuth} from '../utlis/auth'
let history = createMemoryHistory();
export const RegisterUser = (data)=> async dispatch =>{
  try {
    const res = await Axios.post(`api/v1/user/add`, data)
      dispatch({type:REGISTER_USER,  payload:res.data} )
  } catch (error) {
    dispatch({type:REGISTER_USER_ERRORS,  payload:''} )
  }
     
}

export const LoginUser= (data)=> async dispatch =>{
  try {
    console.log(history)
    const res = await Axios.post(`api/v1/user/login`, data)
    console.log(res.data)
    authenticate(res,()=> isAuth());
      dispatch({type:LOGIN_USER,  payload:res.data} )
  } catch (error) {
    dispatch({type:LOGIN_USER_ERRORS,  payload:''} )
  }
     
}