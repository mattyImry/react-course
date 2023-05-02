import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "./ui-slice";

const storte = configureStore({
    reducer: {
        ui: uiSlice.reducer,
    },
});

export default store;
