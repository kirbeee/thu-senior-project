import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi, logoutApi, loginApi, signupApi } from "../thunks/authApi";

// Define interface for User state
interface UsersState {
    isAuthenticating: boolean;
    user: string | null; // Assuming user is represented by username string, adjust if needed
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    data?: any; // Add data property if it's used to store payloads temporarily - specify a more concrete type if possible
}

// Define initial state with types from UsersState interface
const initialState: UsersState = {
    isAuthenticating: false,
    user: null,
    email: null,
    firstName: null,
    lastName: null,
    token: null,
    loading: false,
    error: null,
    data: undefined, // Initialize data as undefined or its appropriate initial value
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        clearError(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        const handlePending = (state: UsersState) => {
            state.loading = true;
            state.error = null;
        };

        const handleRejected = (state: UsersState, action: PayloadAction<string | undefined>) => {
            state.loading = false;
            // @ts-ignore
            state.error = action.payload || action.error.message;
        };

        builder
            .addCase(authApi.pending, handlePending)
            .addCase(authApi.fulfilled, (state: UsersState, action: PayloadAction<{ username: string; token: string; first_name: string; last_name: string }>) => { // Type payload based on your thunk return type and what you're using from action.payload
                state.loading = false;
                state.user = action.payload.username; // 根據後端回應結構調整
                state.token = action.payload.token;
                state.firstName = action.payload.first_name;
                state.lastName = action.payload.last_name;
                state.error = null;
            })
            .addCase(authApi.rejected, handleRejected)

        builder
            .addCase(logoutApi.pending, handlePending)
            .addCase(logoutApi.fulfilled, (state: UsersState, action: PayloadAction<any>) => { // Type payload as needed, here assuming 'any' as type is unclear from original code - specify a concrete type if possible
                state.loading = false;
                state.user = (action.payload as any)?.user || null; // Type assertion and optional chaining for safety - adjust based on actual payload structure
                state.token = (action.payload as any)?.token || null; // Type assertion and optional chaining for safety - adjust based on actual payload structure
                state.error = null;
            })
            .addCase(logoutApi.rejected, handleRejected)

        builder
            .addCase(loginApi.pending, handlePending)
            .addCase(loginApi.fulfilled, (state: UsersState, action: PayloadAction<any>) => { // Type payload as needed, here assuming 'any' as type is unclear from original code - specify a concrete type if possible
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(loginApi.rejected, handleRejected)

        // @ts-ignore
        builder
            .addCase(signupApi.pending, handlePending)
            .addCase(signupApi.fulfilled, (state: UsersState, action: PayloadAction<any>) => { // Type payload as needed, here assuming 'any' as type is unclear from original code - specify a concrete type if possible
                state.loading = false;
                state.data = action.payload;
            })
            // @ts-ignore
            .addCase(signupApi.rejected, handleRejected)
    }
})
export const { clearError } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;