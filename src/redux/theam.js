import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theme: JSON.parse(localStorage.getItem("theme")) || "light",
};

const theme = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            localStorage.setItem("theme", JSON.stringify(action.payload));
        },
    },
});

export default theme.reducer;
export function setTheme(value) {
    return async (dispatch) => {
        dispatch(theme.actions.setTheme(value));
    };
} 