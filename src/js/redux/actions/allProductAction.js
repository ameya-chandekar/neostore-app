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
        //  const data=payload;
        let cat_id=payload.category_id?payload.category_id:"";
        let col_id=payload.color_id?payload.color_id:"";


        const data={category_id:cat_id,color_id:col_id}
        //  const data ={payload}

        console.log(data,"data in all product action");
        let cb = {
            success: (res) => {
console.log("18--------18----18---180----18-",res);

                const newState={
                  
                    productdetails:[...res.product_details]
                }
                dispatch(storeAllProduct(newState))

            },
            error: (err) => {
               
            }
        }

        API.getAllProduct(data, cb)

    }

}


