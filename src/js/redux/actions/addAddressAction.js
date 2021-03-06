import * as actionType from './actionTypes';
import { API } from '../../api/api';


const address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.ADD_ADDRESS,
        payload: payload
    };
};
export const addAddress = (payload) => {
    return (dispatch, getState) => {
        const data = { address: payload.address, pincode: payload.pincode, city: payload.city,state: payload.state, country: payload.country}
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
        API.addAddress(data, cb,data2)
    }
}

