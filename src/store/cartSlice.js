import { createSlice } from '@reduxjs/toolkit'

const initialState = {cart: [], quantity: 0, totalCost: 0}
// cart = {id, title, price, quantity}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const matchingIndex = state.cart.findIndex(item => action.payload.id === item.id)
            if (matchingIndex === -1) {
                state.cart.push({
                id: action.payload.id, 
                title: action.payload.title, 
                price: action.payload.price, 
                quantity: action.payload.quantity
                })
            } else {
                state.cart[matchingIndex].quantity += action.payload.quantity
            }
            state.quantity += action.payload.quantity
            state.totalCost += action.payload.price
        },
        removeFromCart(state, action) {
            const matchingIndex = state.cart.findIndex(item => action.payload.id === item.id)
            state.cart[matchingIndex].quantity -= action.payload.quantity
            state.quantity -= action.payload.quantity
            state.cart = state.cart.splice(matchingIndex, 1)
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice