import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    isAdded: false,
    // userdetails:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_ADDRESS:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer