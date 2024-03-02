import { combineReducers } from "@reduxjs/toolkit";
import themeReducer from "./theam";
import userReducer from "./userslice";
import postReducer from './postSlice';

const rootReducer = combineReducers({
    theme: themeReducer,
    user: userReducer,
    post: postReducer
});

export default rootReducer;
