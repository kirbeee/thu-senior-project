import { configureStore } from '@reduxjs/toolkit'
import {usersReducer} from "./slices/usersSlice";
import {boardsReducer} from "./slices/boardSlice";
import {courseReducer} from "./slices/courseSlice";

export const store = configureStore({
        reducer: {
            users: usersReducer,
            boards: boardsReducer,
            courses: courseReducer,
        }
    })

// Infer the type of makeStore
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export * from "./thunks/authApi";