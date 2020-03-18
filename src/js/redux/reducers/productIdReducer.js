import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
   product_id:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.PRODUCT_ID:
            return updateObject(state, action.payload)

        default:
            return state;
    }

}

export default reducer