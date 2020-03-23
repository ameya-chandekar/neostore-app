import * as actionType from './actionTypes';
import { API } from '../../api/api';

const cartdata = (payload) => {
    // console.log(payload);
    return {
        type: actionType.ADD_TO_CART,
        payload: payload
    };
};

export const addToCart = (payload) => {
    return (dispatch, getState) => {
        const data = { product_id:payload.p_id,quantity:"1"}
        let cb = {
            success: (res) => {
                // console.log();
                const newState = {
                    isAdded: true,
                    productdetails: { ...res }
                }
                dispatch(cartdata(newState))
            },
            error: (err) => {


            }
        }
        API.addtocart(data, cb)
    }
}

