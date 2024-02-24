import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post: {},
    edit: false,
}
const Postslice = createSlice({
    name: "post",
    initialState,
    reducers: {
        getposts: (state, action) => { 
            state.post = action.payload;
        },
        setEdit: (state, action) => {
            state.edit = action.payload;
        },
    },
});



export default Postslice.reducer;

export function getposts(value) {
    return async (dispatch) => {
        dispatch(Postslice.actions.getposts(value));
    };
}

