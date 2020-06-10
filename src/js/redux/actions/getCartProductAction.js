import * as actionType from './actionTypes';
import { API } from '../../api/api';

const cartdata = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_CART_PRODUCT,
        payload: payload
    };
};

export const getCartProduct = (payload) => {
    return (dispatch, getState) => {
        const data = payload.cust_id
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        let cb = {
            success: (res) => {
                console.log("cart p from action ",res);
                const newState = {
                    // isAdded: true,
                    cartProductdetails:{...res}
                }
                dispatch(cartdata(newState))
            },
            error: (err) => {


            }
        }
        API.getCartProduct(data, cb, data2)
    }
}

