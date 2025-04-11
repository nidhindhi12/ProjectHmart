import { createSlice } from '@reduxjs/toolkit'


const toggleAuth = createSlice({
    name: 'auth',
    initialState: {
        auth: false,
        user: {}
    },

    reducers: {
        loginStatus: (state, actions) => {
            state.auth = !state.auth;
            state.user = {...actions.payload};
            // console.log(state.user);

        },

        clearLogout: (state, actions) => {
            state.auth = false,
                state.user = {};
        }
    }
});

export const { loginStatus, clearLogout } = toggleAuth.actions;
export default toggleAuth.reducer