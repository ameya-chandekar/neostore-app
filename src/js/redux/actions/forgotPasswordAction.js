import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Password = (payload) => {
    // console.log(payload);
    return {
        type: actionType.FORGOT_PASSWORD,
        payload: payload
    };
};
export const forgotPassword = (payload) => {
    return (dispatch, getState) => {
        const data = payload
        //console.log(data);
        let cb = {
            success: (res) => {
                console.log();
                
                const newState={
               
                    otpData: {...res}
                }
                dispatch(Password(newState))
            },
            error: (err) => {
               
            }
        }
        API.forgotPassword(data, cb)
    }
}

