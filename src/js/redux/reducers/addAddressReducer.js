import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    isUpdated:false,
    isAdded: false,
    Addresses:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ADDRESS:
            return updateObject(state, action.payload)

            case actionType.GET_ADDRESS:
            return updateObject(state, action.payload)  
            
            case actionType.DELETE_ADDRESS:
            return updateObject(state, action.payload)
            
            case actionType.UPDATE_ADDRESS:
            return updateObject(state, action.payload)

        default: return state;
    }

}
export default reducer