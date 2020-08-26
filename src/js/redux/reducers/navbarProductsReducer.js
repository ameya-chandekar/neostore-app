import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    productdetails:{}
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
        case actionType.NAVBAR_PRODUCT:
            return updateObject(state, action.payload)



            
        default:
            return state;
    }

}
export default reducer