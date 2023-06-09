import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increse(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },

    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
