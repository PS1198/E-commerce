import {createSlice}  from "@reduxjs/toolkit";
import { prototype } from "module";
const initialState = {
    products :[],
    searchTerm:[],
    filetrData:[]
}

const productSlice = createSlice ({
    name:'products',
    initialState,
    reducers:{
        setProducts(state,action){
            state.products = action.payload
        },
        setSearchTerm(state,action){
            state.searchTerm = action.payload;
            state.filetrData = state.products.filetr(product => product.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
        }

    },
})
export const {setProducts,setSearchTerm} = productSlice.actions;
export default productSlice.reducer;