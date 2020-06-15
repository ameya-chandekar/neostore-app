import * as actionType from './actionTypes';
import { API } from '../../api/api';


const Profile = (payload) => {
    // console.log(payload);
    return {
        type: actionType.EDIT_PROFILE_DETAILS,
        payload: payload
    };
};
export const editProfileDetails = (payload) => {
    return (dispatch, getState) => {
        let data=payload.submitData
        // const data2 = {"Authorization" : `Bearer ${payload.user_token}`}

        const data2={ Authorization: 'Bearer ' + payload.user_token}
        // const data =payload.user_id
        console.log("kkkkkkk",data);
        console.log(data2,"token in edit actiion")
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
        API.editProfileDetails(data, cb,data2)
    }
}

