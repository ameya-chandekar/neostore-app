import * as actionType from './actionTypes';
import { API } from '../../api/api';

const cartdata = (payload) => {
    // console.log(payload);
    return {
        type: actionType.DELETE_CART_PRODUCT,
        payload: payload
    };
};
export const deleteCartProduct = (payload) => {
    return (dispatch, getState) => {
        const data = payload.p_id
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        let cb = {
            success: (res) => {

                const newState = {
                    isAdded: true,
                    cartProductdetails: { ...res }                }
                dispatch(cartdata(newState))
            },
            error: (err) => {


            }
        }
        API.deleteCartProduct(data, cb, data2)
    }
}

