import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(window?.localStorage.getItem("user")) ?? {},
    edit: false,
}
const Userslice = createSlice({
    name: "User",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            window?.localStorage.setItem("user", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            state.user = null;
            window?.localStorage.removeItem("user");
        },
        setEdit: (state, action) => {
            state.edit = action.payload;
        },
    },
});

export default Userslice.reducer;

export function userlogin(value) {
    return async (dispatch) => {
        dispatch(Userslice.actions.setUser(value));
    };
}
export function userlogout() {
    return async (dispatch) => {
        dispatch(Userslice.actions.logout());
    };
}
export function useredit(value) {
    return async (dispatch) => {
        dispatch(Userslice.actions.setEdit(value));
    };
}