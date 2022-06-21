import { createSlice } from "@reduxjs/toolkit";

const initialState = {isLoggedIn: false, firstName: "", lastName: "", email: ""}

const authSlice = createSlice({
    name: auth,
    initialState,
    reducers: {
        logIn(state) {state.isLoggedIn = true},
        logOut(state) {state.isLoggedIn = false}
    }
})

export const authActions = authSlice.actions
export default authSlice