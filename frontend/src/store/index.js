import {configureStore} from "@reduxjs/toolkit";
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

export * from "./thunks/authApi";