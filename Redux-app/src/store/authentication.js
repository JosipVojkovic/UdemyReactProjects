import { createSlice } from "@reduxjs/toolkit"

// Authentication slice

const initialAuthenticationState = {
    isAuthenticated: false
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState: initialAuthenticationState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export default authenticationSlice.reducer;
export const authenticationActions = authenticationSlice.actions