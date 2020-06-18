import * as actionType from './actionTypes';
import { API } from '../../api/api';


const address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.PLACE_ORDER,
        payload: payload
    };
};
export const placeOrder = (payload) => {
    return (dispatch, getState) => {
        const data = payload.data1
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
    
        let cb = {
            success: (res) => {
                console.log("from add addresss action");
                const newState = {
                    isUpdated: true,
                   
                }
                dispatch(address(newState))

            },
            error: (err) => {

            }
        }
        API.placeOrder(data, cb,data2)
    }
    
}

