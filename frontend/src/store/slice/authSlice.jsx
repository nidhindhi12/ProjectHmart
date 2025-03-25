import { createSlice } from '@reduxjs/toolkit'


const toggleAuth = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        user: {}
    },

    reducers: {
        loginStatus:(state, actions)=> {
            state.auth = !state.auth;
            state.user = actions.payload;
        }
    }
});

export const { loginStatus } = toggleAuth.actions;
export default toggleAuth.reducer