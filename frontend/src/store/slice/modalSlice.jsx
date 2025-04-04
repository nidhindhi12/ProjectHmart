import { createSlice } from "@reduxjs/toolkit";


const modalSlice = createSlice({
    name: "modalShow",
    initialState: {
        show: false,
        passtype:false,
        changePass:false,
    },

    reducers: {
        toggleShow: (state) => {
            state.show = !state.show;
            
        },
        togglePassType:(state)=>{
            state.passtype = !state.passtype;

        },
        toggleChangePass:(state)=>{
            state.changePass= !state.changePass;
        }
    }


})

 export const { toggleShow,togglePassType,toggleChangePass } = modalSlice.actions;
export default modalSlice.reducer