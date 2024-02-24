import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";
import { legacy_createStore as createStore} from 'redux'

const store = createStore(userReducer);
const { dispatch } = store;
export { store, dispatch }; 


