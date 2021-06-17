import {AUTH, LOGOUT} from '../constants/actionTypes';


const authReducer=(state={authData: null},action)=>{
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile',JSON.stringify({...action?.data})); //The localStorage and sessionStorage properties allow us to save key/value pairs in a web browser. The localStorage object stores data with no expiration date. The sessionStorage object stores data for only one session 
            return {...state,authData:action?.data};
        
        case LOGOUT:
            localStorage.clear();
            return {...state,authData:null};
        default:
            return state;
    }
}

export default authReducer;