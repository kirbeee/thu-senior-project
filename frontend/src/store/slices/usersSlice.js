import {createSlice} from "@reduxjs/toolkit";
import {authApi} from "../thunks/authApi";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(authApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(authApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(authApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export const usersReducer = usersSlice.reducer;