import {createSlice} from "@reduxjs/toolkit";
import {authApi, logoutApi, loginApi, signupApi} from "../thunks/authApi";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        isAuthenticating: false,
        user: null,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        const handlePending = (state) => {
            state.loading = true;
            state.error = null;
        };

        const handleRejected = (state, action) => {
            state.loading = false;
            state.error = action.payload || action.error.message;
        };

        builder
            .addCase(authApi.pending, handlePending)
            .addCase(authApi.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.username; // 根據後端回應結構調整
                state.token = action.payload.token;
                state.username = action.payload.username;
                state.firstName = action.payload.first_name;
                state.lastName = action.payload.last_name;
                state.error = null;
            })
            .addCase(authApi.rejected, handleRejected)

        builder
            .addCase(logoutApi.pending, handlePending)
            .addCase(logoutApi.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload.user || null; // 根據後端回應結構調整
                state.token = action.payload.token || null;
                state.error = null;
            })
            .addCase(logoutApi.rejected, handleRejected)

        builder
            .addCase(loginApi.pending, handlePending)
            .addCase(loginApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
            .addCase(loginApi.rejected, handleRejected)

        builder
            .addCase(signupApi.pending, handlePending)
            .addCase(signupApi.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            })
            .addCase(signupApi.rejected, handleRejected)
    }
})

export const usersReducer = usersSlice.reducer;