import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Address = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_ADDRESS,
        payload: payload
    };
};
export const getAddress = (payload) => {
    return (dispatch, getState) => {
        let data={}
        
        // const data =payload.user_id
        console.log("kkkkkkk",data);
        let cb = {
            success: (res) => {
                
                const newState={
                  
                    Addresses:[...res]
                }
                dispatch(Address(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getAddress(data, cb)
    }
}

