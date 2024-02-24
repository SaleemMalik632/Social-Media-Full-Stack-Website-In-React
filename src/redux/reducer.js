import { combineReducers } from "@reduxjs/toolkit";
import Theme from "./theam";
import Userslice from "./userslice";
import Postslice from './postSlice';
const reducer = combineReducers({
    theme: Theme,
    Userslice: Userslice,
    Postslice: Postslice
});
export default reducer;