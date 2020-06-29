import {REGISTER_USER, REGISTER_USER_ERRORS} from '../Actions/Types'

export default (state ={RegUser:'', errors:''},action)=>{
switch(action.type){
    case REGISTER_USER:
        return {...state, RegUser:action.payload};
        case REGISTER_USER_ERRORS:
            return {...state, errors:action.payload};
        default:
            return state
}
}