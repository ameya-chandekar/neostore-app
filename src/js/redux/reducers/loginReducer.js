import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    isValid: {}
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOG_IN:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer