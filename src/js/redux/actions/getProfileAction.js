import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Profile = (payload) => {
    // console.log(payload);
    return {
        type: actionType.GET_PROFILE_DATA,
        payload: payload
    };
};
export const getProfileData = (payload) => {
    return (dispatch, getState) => {
        let data={}
        const data2 = {"Authorization" : `Bearer ${payload.user_token}`}
        // const data =payload.user_id
        console.log("kkkkkkk",data);
        let cb = {
            success: (res) => {
                
                const newState={
                    
                    profile:{...res}
                }
                dispatch(Profile(newState))

            },
            error: (err) => {
            //    console.log("abcdegjhhhhhh",err)
            }
        }
        API.getProfileData(data, cb,data2)
    }
}

