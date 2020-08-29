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
       var bodyFormData = new FormData();
       bodyFormData.append('first_name', payload.first_name);
       bodyFormData.append('last_name', payload.last_name);
       bodyFormData.append('email', payload.email);
       bodyFormData.append('dob', payload.dob);
       bodyFormData.append('phone_no', payload.phone_no);
       bodyFormData.append('gender', payload.gender);

       if(payload.profile_img !== undefined)
       bodyFormData.append('profile_img', payload.profile_img);

        const data2={ Authorization: 'Bearer ' + payload.user_token}
        // const data =payload.user_id

        // console.log(data2,"token in edit actiion")
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
        return API.editProfileDetails(bodyFormData, cb,data2)
        .then(res => {
            // console.log(res, "action returning promise")
            // Return something
            return true;
        }).catch((error) => { 
            // console.log(error, "errror action returning promise")
            // return error;
         });
    }
}

