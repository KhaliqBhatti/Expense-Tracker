import { configureStore } from "@reduxjs/toolkit";
import {  setupListeners } from "@reduxjs/toolkit/query";

import { Api } from "./Components/Slices/ApiSlice";
export const store = configureStore({
    reducer:{
        [Api.reducerPath]:Api.reducer
    },
    middleware:(mid)=>{
        return mid().concat(Api.middleware)
    }
})
setupListeners(store.dispatch)