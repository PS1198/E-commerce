import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    products: [],
    totalQunatity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart(state, action) {
            const newItem = action.payload;
            const itemIndex = state.products.find((item) => item.id === newItem.id);
            if (itemIndex) {
                itemIndex.qunatity++;
                itemIndex.totalPrice += newItem.price;
            } else {
                state.products.push({
                    id: newItem.id,
                    name: newItem.name,
                    price: newItem.price,
                    qunatity: 1,
                    totalPrice: newItem.price,
                    image: newItem.Image
                })
            }
            state.totalPrice += newItem.price
            state.totalQunatity++
        },
        removeFromCart(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id == id)
            if(findItem){
                state.totalPrice -=findItem.totalPrice
                state.totalQunatity -= findItem.qunatity
                state.products = state.products.filter(item => item.id !== id)
            }
        },
        increaseQunatity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id == id)
            if(findItem){
                findItem.qunatity++;
                findItem.totalPrice += findItem.price
                state.totalQunatity++
                state.totalPrice =+ findItem.price
            }
        },
         decreaseQunatity(state,action){
            const id = action.payload;
            const findItem = state.products.find(item => item.id == id)
            if(findItem){
                findItem.qunatity--;
                findItem.totalPrice -= findItem.price
                state.totalQunatity--
                state.totalPrice -= findItem.price
            }
        }

    },
})
export const { addtoCart,removeFromCart ,increaseQunatity,decreaseQunatity} = cartSlice.actions;
export default cartSlice.reducer;