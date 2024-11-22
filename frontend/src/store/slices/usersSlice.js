import {createSlice} from "@reduxjs/toolkit";
import {authApi, logoutApi, loginApi, signupApi} from "../thunks/authApi";

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
        builder.addCase(logoutApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(logoutApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(logoutApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
        builder.addCase(loginApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(loginApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
        builder.addCase(signupApi.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(signupApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(signupApi.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error
        })
    }
})

export const usersReducer = usersSlice.reducer;