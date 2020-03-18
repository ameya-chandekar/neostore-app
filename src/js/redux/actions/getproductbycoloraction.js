import * as actionType from './actionTypes';
import { API } from '../../api/api';


const productbycolrid = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_PRODUCT_BY_COLOR,
        payload: payload
    };
};
export const getproductbycolor = (payload) => {
    return (dispatch, getState) => {
        // let data={}
        
        const data =payload.color_id
        console.log("kkkkkkk",data);
        let cb = {
            success: (res) => {
                console.log("on api calllllllll",res);
                const newState={
                  
                    productdetails:[...res.product_details]
                }
                dispatch(productbycolrid(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getProductByColor(data, cb)
    }
}

