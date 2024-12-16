import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CratSlice";
import productSlice from "./ProductSlice";
 const store = configureStore ({
    reducer: {
        cart:cartSlice,
        product:productSlice

    }
 })

 export  default store;