import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility/utility';

const initialState = {
    Orders:{},
    orderInvoice:{},
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
       
            case actionType.GET_ORDERS:
            return updateObject(state, action.payload)

            case actionType.GET_ORDER_PDF:
            return updateObject(state, action.payload)

      
        default:
            return state;
    }

}
export default reducer