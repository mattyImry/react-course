import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
};

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
