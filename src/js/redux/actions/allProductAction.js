import * as actionType from './actionTypes';
import { API } from '../../api/api';


const storeAllProduct = (payload) => {
    // console.log(payload);
    return {
        type: actionType.ALL_PRODUCT,
        payload: payload
    };
};
export const getAllProduct = (payload) => {

    return (dispatch, getState) => {
        const data = {}
      

        //console.log(data);
        let cb = {
            success: (res) => {
                dispatch(storeAllProduct({allProduct :{ ...res }}))

            },
            error: (err) => {
               
            }
        }

        API.getAllProduct(data, cb)

    }

}