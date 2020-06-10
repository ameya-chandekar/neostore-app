import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_ORDER_PDF,
        payload: payload
    };
};

export const getOrderPDF = (payload) => {
    return (dispatch, getState) => {
        const data = payload.orderdata
        console.log(payload.orderdata,"data passed to invoice api")
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        
        let cb = {
            success: (res) => {
                // console.log(res,"order invoice");
                const newState={
                  
                    orderInvoice:{...res}
                }
                dispatch(Address(newState))

            },
            error: (err) => {


            }
        }
        API.getOrderPDF(data, cb,data2)
    }
}

