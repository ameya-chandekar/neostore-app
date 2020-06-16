import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
   
    otpData:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FORGOT_PASSWORD:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer