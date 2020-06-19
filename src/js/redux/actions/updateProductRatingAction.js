import * as actionType from './actionTypes';
import { API } from '../../api/api';


const rating = (payload) => {
    // console.log(payload);
    return {
        type: actionType.UPDATE_RATING,
        payload: payload
    };
};
export const updateRating = (payload) => {
    return (dispatch, getState) => {
        const data = payload.data
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        let cb = {
            success: (res) => {
                console.log("from add addresss action");
                const newState = {
                    isUpdated: true,
                   
                }
                dispatch(rating(newState))

            },
            error: (err) => {

            }
        }
        API.updateRating(data, cb,data2)
    }
    
}

