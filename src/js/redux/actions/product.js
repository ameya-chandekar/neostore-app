import * as actionType from './actionTypes';
import { API } from '../../api/api';


const storePopularProduct = (payload) => {
    // console.log(payload);
    return {
        type: actionType.POPULAR_PRODUCT,
        payload: payload
    };
};

export const getPopularProduct = (payload) => {

    return (dispatch, getState) => {
        const data = {}
      

        //console.log(data);
        let cb = {
            success: (res) => {
                dispatch(storePopularProduct({popularProduct :{ ...res }}))

            },
            error: (err) => {
               
            }
        }

        API.getProduct(data, cb)

    }

}

