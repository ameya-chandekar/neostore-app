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
        const data = payload
        console.log(data,"address id from action");
        
        let cb = {
            success: (res) => {
                console.log();
                const newState={
                  
                    Addresses:[...res]
                }
                dispatch(Address(newState))

            },
            error: (err) => {


            }
        }
        API.deleteAddress(data, cb)
    }
}

