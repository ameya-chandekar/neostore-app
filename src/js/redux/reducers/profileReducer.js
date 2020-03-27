import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    // isAdded: false,
    profile:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {


            case actionType.GET_PROFILE_DATA:
            return updateObject(state, action.payload)  
            
     

        default: return state;
    }

}
export default reducer