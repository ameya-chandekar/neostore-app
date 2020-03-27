import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    isAdded: false,
    cartProductdetails:{}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
            case actionType.ADD_TO_CART:
            return updateObject(state, action.payload)

            case actionType.GET_CART_PRODUCT:
            return updateObject(state, action.payload)
            
            case actionType.DELETE_CART_PRODUCT:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer