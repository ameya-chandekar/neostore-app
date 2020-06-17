import * as actionType from './actionTypes';
import { API } from '../../api/api';


const address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.UPDATE_ADDRESS,
        payload: payload
    };
};
export const updateAddress = (payload) => {
    return (dispatch, getState) => {
        const data = payload.data
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        let cb = {
            success: (res) => {
                console.log("from add addresss action");
                const newState = {
                    isAdded: true,
                    Addresses:[...res]
                   
                }
                dispatch(address(newState))

            },
            error: (err) => {


            }
        }
        API.updateAddress(data, cb,data2)
    }
}

