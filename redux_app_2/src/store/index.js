import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increse(state, action) {
      state.counter = state.counter + action.amount;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showcounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
