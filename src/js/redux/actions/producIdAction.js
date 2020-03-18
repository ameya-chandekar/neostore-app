import * as actionType from './actionTypes';
import { API } from '../../api/api';


const productidchanger = (payload) => {
    // console.log(payload);
    return {
        type: actionType.PRODUCT_ID,
        payload: payload
    };
};
export const getproductid = (payload) => {
    return (dispatch, getState) => {
        const data =payload.p_id
        console.log( "pid from action",data)
                const newState={
                    product_id:data
                }
                dispatch(productidchanger(newState))

        
   
    }
}

