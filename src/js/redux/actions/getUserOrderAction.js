
import * as actionType from './actionTypes';
import { API } from '../../api/api';


const order = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_ORDERS,
        payload: payload
    };
};
export const getOrders = (payload) => {
    return (dispatch, getState) => {
        let data={}
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        // const data =payload.user_id
        console.log("kkkkkkk",data2);
        let cb = {
            success: (res) => {
                
                const newState={
                    
                    Orders:{...res}
                }
                dispatch(order(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getOrders(data, cb,data2)
    }
}

