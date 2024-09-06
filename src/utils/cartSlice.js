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
            console.log(JSON.parse(JSON.stringify(state.items)));
            state.items = state.items.filter((item)=> item.card.info.id != action.payload);
            console.log(JSON.parse(JSON.stringify(state.items)));
        },
        clearCart:(state,action)=>{
            state.items.length = 0; // [] create items 
        },
    },
});

export const {addUser,removeUser,clearCart} = cartSlice.actions;

export default cartSlice.reducer;