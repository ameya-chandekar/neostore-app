import * as actionType from './actionTypes';
import { API } from '../../api/api';
const storeAllProduct = (payload) => {
    // console.log(payload);
    return {
        type: actionType.NAVBAR_PRODUCT,
        payload: payload
    };
};
export const getNavProduct = (payload) => {

    return (dispatch, getState) => {
        //  const data=payload;
        let cat_id=payload.category_id?payload.category_id:"";
        let col_id=payload.color_id?payload.color_id:"";
        const data={category_id:cat_id,color_id:col_id}
        //  const data ={payload}
        let cb = {
            success: (res) => {
                const newState={
                    productdetails:res
                }
                dispatch(storeAllProduct(newState))

            },
            error: (err) => {
               
            }
        }

        API.getNavProduct(data, cb)

    }

}


