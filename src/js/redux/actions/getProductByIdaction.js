import * as actionType from './actionTypes';
import { API } from '../../api/api';


const productbyid = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_PRODUCT_BY_ID,
        payload: payload
    };
};
export const getProductById = (payload) => {
    return (dispatch, getState) => {
        // let data={}
        
        const data =payload.productid
        console.log("product id in action ",data);
        let cb = {
            success: (res) => {
                // console.log("on api calllllllll",res);
                const newState={
                  
                    productdetails:[...res.product_details]
                }
                dispatch(productbyid(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getProductById(data, cb)
    }
}

