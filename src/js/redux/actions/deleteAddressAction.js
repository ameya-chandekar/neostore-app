import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.DELETE_ADDRESS,
        payload: payload
    };
};

export const deleteAddress = (payload) => {
    return (dispatch, getState) => {
        const data = payload.addressid
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        console.log(data2,"address id tokennnnnnnnnnnfrom action");
        
        let cb = {
            success: (res) => {
                console.log(res,"delete address res");
                const newState={
                  
                    Addresses:[...res]
                }
                dispatch(Address(newState))

            },
            error: (err) => {


            }
        }
        API.deleteAddress(data, cb,data2)
    }
}

