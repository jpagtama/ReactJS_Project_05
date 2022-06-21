import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn: false, firstName: "", lastName: "", email: ""}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp(state,action) {
            state.isLoggedIn = true
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
        },
        logIn(state) {state.isLoggedIn = true},
        logOut(state) {state.isLoggedIn = false}
    }
})

export const authActions = authSlice.actions
export default authSlice