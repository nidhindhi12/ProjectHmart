import { createSlice } from "@reduxjs/toolkit";



const countQuantity = createSlice({
    name: 'count',
    initialState: {
        value: 0,
        products: [],
        productdata: [],
        showSidebar: false,
       


    },
    reducers: {

        increment(state, actions) {
            state.value += 1;
            const proqty = { ...actions.payload, qty: 1 }

            state.products = [...state.products, proqty];
            console.log(state.products);


        },
        decrement(state, actions) {

            const match_prod = state.products.find(product => product.id === actions.payload.id)
            match_prod.qty--;
            console.log(match_prod.qty);
            if (match_prod.qty === 0) {

                state.products = state.products.filter(product => product.id !== actions.payload.id)
                state.value--;
            }




        },
        qtyincrease(state, actions) {
            // state.quantity += 1;
            const match_prod = state.products.find(product => product.id === actions.payload.id)
            match_prod.qty++;
        },

        removeItem(state, actions) {
            state.products = state.products.filter(products => products.id !== actions.payload);
            state.value--;
        },
        addItem(state, action) {
            state.productdata = action.payload;
            // console.log(state.productdata);
        },
        Sidebar(state) {
            state.showSidebar = !state.showSidebar
            // console.log(state.Sidebar)
        }


    },
})

export const { increment, decrement, qtyincrease, removeItem, addItem, Sidebar } = countQuantity.actions
export default countQuantity.reducer