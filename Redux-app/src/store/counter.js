import { createSlice } from "@reduxjs/toolkit"

// Counter slice

const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        increase(state, action) {
            state.counter = state.counter + action.payload.number
        },
        decrease(state, action) {
            state.counter = state.counter - action.payload.number
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export default counterSlice.reducer;
export const counterActions = counterSlice.actions