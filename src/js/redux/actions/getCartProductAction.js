import * as actionType from './actionTypes';
import { API } from '../../api/api';

const cartdata = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_CART_PRODUCT,
        payload: payload
    };
};

// // Action
// export const checkClient = (cliente) => {
//     return dispatch => {
//         // Return the promise
//         return axios.get(...).then(res => {
//             ...
//             // Return something
//             return true;
//         }).catch((error) => {  });
//     }
// }


export const getCartProduct = (payload) => {
    return (dispatch, getState) => {
        // const data = payload.cust_id
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        let cb = {
            
            success: (res) => {
                console.log("cart p from action ",res);
                
                const newState = {
                    isAdded: true,
                    cartProductdetails:{...res}
                }
                dispatch(cartdata(newState))
            },
            error: (err) => {

            }
        }
       return API.getCartProduct( cb, data2)
       .then(res => {
            
            console.log(res,"this is from ACTION OF get  cart  data")
            return true;
        }).catch((error) => {  });
    }
}

