import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    // isAdded: false,
    profile:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {


            case actionType.EDIT_PROFILE_DETAILS:
            return updateObject(state, action.payload)  
            
     

        default: return state;
    }

}
export default reducer