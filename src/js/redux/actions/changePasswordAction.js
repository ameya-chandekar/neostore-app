import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.CHANGE_PASSWORD,
        payload: payload
    };
};

export const changePassword = (payload) => {
    return (dispatch, getState) => {
        const data = {oldPass:payload.oldPassword, newPass: payload.newPassword,confirmPass :payload.cPassword,}
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        console.log(data2,"address id tokennnnnnnnnnnfrom action");
        
        let cb = {
            success: (res) => {
                console.log(res,"change password action ");
                const newState={
                  
                    Addresses:[...res]
                }
                dispatch(Address(newState))

            },
            error: (err) => {


            }
        }
        API.changePassword(data, cb,data2)
    }
}

