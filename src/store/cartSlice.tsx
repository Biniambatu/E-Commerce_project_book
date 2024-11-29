import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:({
        cartList: []
    }),
    reducers: ({
        add_to_cart(state,action){
          const updatedCartList = state.cartList.concat(action.payload);
          return {...state, cartList:updatedCartList}
        },
        remove_from_cart(state, action){
          const updatedCartList = state.cartList.filter(item => item.id !== action.payload.id)
          return {...state, cartList: updatedCartList}
        }
    })
})
export const {add_to_cart,remove_from_cart}  = cartSlice.actions;
export const cartReducer = cartSlice.reducer;