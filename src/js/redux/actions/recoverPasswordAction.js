import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Password = (payload) => {
    // console.log(payload);
    return {
        type: actionType.RECOVER_PASSWORD,
        payload: payload
    };
};
export const recoverPassword = (payload) => {
    return (dispatch, getState) => {
        const data = payload.data
        const data2=payload.token
        //console.log(data);
        // let cb = {
        //     success: (res) => {
        //         console.log();
                
        //         const newState={
               
        //             otpData: ...res
        //         }
        //         dispatch(Password(newState))
        //     },
        //     error: (err) => {
               
        //     }
        // }
        API.recoverPassword(data,data2)
    }
}

