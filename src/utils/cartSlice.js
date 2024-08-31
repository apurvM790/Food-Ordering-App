import { createSlice } from "@reduxjs/toolkit";

const cartSlice =  createSlice({
    name:"cart",
    initialState: {
        items:[]
    },
    reducers:{
        addUser:(state,action) => {
            // mutating the state here.
            state.items.push(action.payload);
        },
        removeUser:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length = 0; // [] create items 
        },
    },
});

export const {addUser,removeUser,clearCart} = cartSlice.actions;

export default cartSlice.reducer;