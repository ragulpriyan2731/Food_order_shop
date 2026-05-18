import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./Cartslice"

export const Store = configureStore({
    reducer:{
        cart:cartreducer,
    }
})