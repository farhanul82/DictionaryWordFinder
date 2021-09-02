import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Thunk from "redux-thunk";
import { WordReducer } from "./Reducer/Reducer";


const store = createStore(
  combineReducers({
    words: WordReducer
  }),
  composeWithDevTools(applyMiddleware(Thunk))
);
export default store;