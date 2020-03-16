
//redux
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
// Redux Persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

// Reucers
import productReducer from '../reducers/productReducer';
import allProductReducer from '../reducers/allProductReducer'
import loginReducer from '../reducers/loginReducer'
import registerReducer from '../reducers/registerReducer'
// MiddleWare
import thunk from 'redux-thunk';

//env


const AppRootReducer = combineReducers({
    product: productReducer,
    allProduct:allProductReducer,
    login:loginReducer,
    register:registerReducer,

   

})

const rootReducer = (state, action) => {

    // if (action.type === 'LOGOUT_USER') {
    //     // console.log('remove persist');
    //     storage.removeItem('persist:root')

    //     // Update for Locale redirect after logout
    //     if ((state !== null) && (state !== undefined)) {
    //         Object.keys(state).map((s) => {

    //             if ((s !== 'global') && (s !== 'menu')) {
    //                 console.log('keys : ', s)
    //                 state[s] = undefined;
    //             }


    //         })
    //     }

    //     // state = undefined;
    // }
    return AppRootReducer(state, action);
};

const middlewares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const devTools = composeEnhancers(applyMiddleware(...middlewares));


const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [],
    stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
// params are combine reducer and middleware
export const store = createStore(persistedReducer, devTools);
