import { ActionType } from "./actions";
import { combineReducers, createStore } from "redux";

const counterReducer = (state: number = 0, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT":
            return state + Number(action.incrementBy);
        case "DECREMENT":
            return state - Number(action.decrementBy);
        default:
            return state;
    }
};

// declare global {
//     interface Window {
//         __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
//     }
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const  combinedReducers = combineReducers({ counterReducer });

const store = createStore( combinedReducers );

export default store;
