import * as actionType from './actionTypes';
import { API } from '../../api/api';


const registerUser = (payload) => {
    // console.log(payload);
    return {
        type: actionType.REGISTER,
        payload: payload
    };
};
export const register = (payload) => {
    return (dispatch, getState) => {
        const data = { first_name: payload.first_name, last_name: payload.last_name, email: payload.email, pass: payload.pass, confirmPass: payload.confirmPass, phone_no: payload.phone_no, gender: payload.gender }
        let cb = {
            success: (res) => {
                console.log();
                const newState = {
                    isRegister: true,
                    userdetails: { ...res }
                }
                dispatch(registerUser(newState))

            },
            error: (err) => {


            }
        }
        API.register(data, cb)
    }
}

