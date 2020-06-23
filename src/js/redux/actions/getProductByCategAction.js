import * as actionType from './actionTypes';
import { API } from '../../api/api';


const productbycatid = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_PRODUCT_BY_CATEG,
        payload: payload
    };
};
export const getproductbycateg = (payload) => {
    return (dispatch, getState) => {
        // let data={}
        
        const data =payload.catogorie_id
        console.log("kkkkkkadadadadak",data);
        let cb = {
            success: (res) => {
                console.log(res,"slider image res from action")
                const newState={
                  
                    productdetails:[...res.product_details]
                }
                dispatch(productbycatid(newState))
                
            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getProductByCateg(data, cb)
    }
}

