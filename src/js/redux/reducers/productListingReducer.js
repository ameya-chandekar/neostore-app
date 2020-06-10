import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    productdetails:[]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case actionType.ALL_PRODUCT:
            return updateObject(state, action.payload)
        case actionType.GET_PRODUCT_BY_CATEG:
            return updateObject(state, action.payload)
        case actionType.GET_PRODUCT_BY_COLOR:
            return updateObject(state, action.payload)
        case actionType.GET_PRODUCT_BY_ID:
            return updateObject(state, action.payload)
        case actionType.GET_PRODUCT_BY_SEARCH:
            return updateObject(state, action.payload)


            
        default:
            return state;
    }

}
export default reducer