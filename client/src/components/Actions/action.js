import {REGISTER_USER, REGISTER_USER_ERRORS} from './Types'
import Axios from 'axios';
export const RegisterUser = (data)=> async dispatch =>{
  try {
    const res = await Axios.post(`api/v1/user/add`, data)
      dispatch({type:REGISTER_USER,  payload:res.data} )
  } catch (error) {
    dispatch({type:REGISTER_USER_ERRORS,  payload:''} )
  }
     
}