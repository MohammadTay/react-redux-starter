import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    amount: 100,
    total: 0,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => state.cartItems = [],


        removeItem: (state, { payload }) => state.cartItems = state.cartItems.filter((item) => item.id !== payload),
        increase: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, { payload }) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    }
})



export const { clearCart, removeItem, increase, decrease, calculateTotals } =
    cartSlice.actions;
// console.log(cartSlice)

export default cartSlice.reducer;