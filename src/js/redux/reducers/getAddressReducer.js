import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    Addresses:[]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
            case actionType.GET_ADDRESS:
            return updateObject(state, action.payload)
            case actionType.DELETE_ADDRESS:
            return updateObject(state, action.payload)
      
        default:
            return state;
    }

}
export default reducer