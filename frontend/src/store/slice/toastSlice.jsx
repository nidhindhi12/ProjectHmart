import { createSlice } from "@reduxjs/toolkit";


const toastSlice = createSlice({
    name: "toast",
    initialState: {
        message: "",
        type: ""
    },
    reducers: {
        showtoast(state, actions) {
            state.message = actions.payload.message;
            state.type = actions.payload.type;
        },
        closetoast(state) {
            state.message = ""
            state.type = ""
        }

    }
});

export const { showtoast, closetoast } = toastSlice.actions;
export default toastSlice.reducer;