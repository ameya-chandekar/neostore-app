import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    isRegister: false,
    userdetails:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.REGISTER:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer