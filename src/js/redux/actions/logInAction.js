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
        const data = {}
        //console.log(data);
        let cb = {
            success: (res) => {
                dispatch(authenticateUser({isLogin:{ ...res }}))

            },
            error: (err) => {
               
            }
        }
        API.logIn(data, cb)
    }
}

