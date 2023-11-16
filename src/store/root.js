import {configureStore } from "@reduxjs/toolkit";
import headerSlice from "./slices/headerSlice";
import addivitiesSlice from "./slices/addivitiesSlice";

export const store = configureStore ({
    reducer: {
        headerSlice,
        addivitiesSlice
    },
})