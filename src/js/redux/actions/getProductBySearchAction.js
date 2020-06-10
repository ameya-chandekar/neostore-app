import * as actionType from './actionTypes';
import { API } from '../../api/api';


const productbysearch = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_PRODUCT_BY_SEARCH,
        payload: payload
    };
};
export const getProductBySearchText = (payload) => {
    return (dispatch, getState) => {
        // let data={}
        
        const data =payload.searchText
        console.log("product id in action ",data);
        let cb = {
            success: (res) => {
                // console.log("on api calllllllll",res);
                const newState={
                  
                    productdetails:[...res.product_details]
                }
                dispatch(productbysearch(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getProductBySearchText(data, cb)
    }
}

