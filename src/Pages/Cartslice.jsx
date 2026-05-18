import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cartitems:[],
    ordered: false
}
const cartslice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtoCart:(state,action)=>{
            state.cartitems.push({
                ...action.payload,
                active:true,
            })
            state.ordered = false
        },
        toggleitem:(state,action)=>{
            const Food =state.cartitems.find((Food)=> Food.id === action.payload)
            Food.active=!Food.active
        },
        buynow:(state)=>{
            state.ordered = true
        }
        
    }
})
export const{addtoCart,toggleitem,buynow}=cartslice.actions
export default cartslice.reducer