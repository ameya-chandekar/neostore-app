import * as actionType from './actionTypes';
import { API } from '../../api/api';


const authenticateUser = (payload) => {
    // console.log(payload);
    return {
        type: actionType.LOG_IN,
        payload: payload
    };
};
export const login = (payload) => {
    return (dispatch, getState) => {
        const data = {email:payload.username,pass:payload.password}
        //console.log(data);
        let cb = {
            success: (res) => {
                console.log();
                const newState={
                    isLogin:true,
                    userdetails: {...res}
                }
                dispatch(authenticateUser(newState))

            },
            error: (err) => {
               
            }
        }
        API.logIn(data, cb)
    }
}

