import {REGISTER_USER, REGISTER_USER_ERRORS, LOGIN_USER, LOGIN_USER_ERRORS} from '../Actions/Types'

export default (state ={RegUser:'', errors:'',LogginUser:'', errors:''},action)=>{
switch(action.type){
    case REGISTER_USER:
        return {...state, RegUser:action.payload.message};
        case REGISTER_USER_ERRORS:
            return {...state, errors:action.payload};

        case LOGIN_USER:
            return {...state, LogginUser:action.payload};
            case LOGIN_USER_ERRORS:
                return {...state, errors:action.payload};
            default:
                return state
    }
    }