import {configureStore} from "@reduxjs/toolkit";
import {usersReducer} from "./slices/usersSlice";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

setupListeners(store.dispatch);

export * from "./thunks/authApi";