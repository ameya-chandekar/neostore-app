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
                console.log(data,"register data from action");
                const newState = {
                    isRegister: true,
                    userdetails: { ...res }
                }
                console.log(newState,"res of the register action")
                dispatch(registerUser(newState))

            },
            error: (err) => {
                console.log(err,"error of the register action")

            }
        }
        return API.register(data, cb) .then(res => {
            // console.log(res, "action returning promise")
            // Return something
            return true;
        }).catch((error) => { 
            // console.log(error, "errror action returning promise")
            // return error;
         });

    }
}

