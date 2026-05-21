import { describe, it, expect } from 'vitest';
import { usersReducer, clearError } from './usersSlice'; // Adjust the import path to your slice file
// Import the action types from your thunks
import { authApi, logoutApi, loginApi, signupApi } from '../thunks/authApi'; // Adjust the import path to your thunk file

describe('usersSlice', () => {
    // Define the initial state as it is in your slice
    const initialState = {
        isAuthenticating: false,
        user: null,
        email: null,
        firstName: null,
        lastName: null,
        token: null,
        loading: false,
        error: null,
        data: undefined,
    };

    // Test case for the initial state
    it('should return the initial state', () => {
        // When the reducer is called with undefined state and no action,
        // it should return the initial state.
        expect(usersReducer(undefined, {})).toEqual(initialState);
    });

    // Test case for the clearError reducer
    it('should handle clearError action', () => {
        // Start with a state that has an error
        const stateWithError = { ...initialState, error: 'Some error message', loading: false };
        // Dispatch the clearError action
        const nextState = usersReducer(stateWithError, clearError());

        // Assert that the error is cleared and other state remains the same
        expect(nextState.error).toBeNull();
        expect(nextState.loading).toBe(false); // Ensure loading is not affected
        expect(nextState.user).toBeNull(); // Ensure other fields are not affected
    });

    // --- Tests for Thunk Actions ---

    // Test case for all thunk pending actions (they share the same logic)
    it('should handle pending actions (authApi, logoutApi, loginApi, signupApi)', () => {
        const pendingActions = [
            authApi.pending('requestId', 'arg'),
            logoutApi.pending('requestId', 'arg'),
            loginApi.pending('requestId', 'arg'),
            signupApi.pending('requestId', 'arg'),
        ];

        pendingActions.forEach(action => {
            // Start from a clean state
            const stateBeforePending = { ...initialState, loading: false, error: 'Previous error' };
            // Dispatch the pending action
            const nextState = usersReducer(stateBeforePending, action);

            // Assert that loading is true and error is null
            expect(nextState.loading).toBe(true);
            expect(nextState.error).toBeNull();
            // Other state properties should remain unchanged
            expect(nextState.user).toBeNull();
            expect(nextState.token).toBeNull();
            expect(nextState.data).toBeUndefined();
        });
    });

    // Test case for authApi.fulfilled
    it('should handle authApi.fulfilled', () => {
        // Define mock payload based on the expected structure from your thunk
        const mockAuthPayload = {
            username: 'testuser',
            token: 'fake-token-abc',
            first_name: 'Test',
            last_name: 'User',
        };
        // Create a fulfilled action with the mock payload
        const fulfilledAction = authApi.fulfilled(mockAuthPayload, 'requestId', 'arg');

        // Simulate the state update when authApi is successful
        const stateBeforeFulfilled = { ...initialState, loading: true, error: 'Previous error' };
        const nextState = usersReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, user, token, firstName, lastName are updated, and error is null
        expect(nextState.loading).toBe(false);
        expect(nextState.user).toBe(mockAuthPayload.username);
        expect(nextState.token).toBe(mockAuthPayload.token);
        expect(nextState.firstName).toBe(mockAuthPayload.first_name);
        expect(nextState.lastName).toBe(mockAuthPayload.last_name);
        expect(nextState.error).toBeNull();
        // Data and other fields should remain unchanged or reset if applicable
        expect(nextState.data).toBeUndefined();
    });

    // Test case for logoutApi.fulfilled
    it('should handle logoutApi.fulfilled', () => {
        // Define mock payload for logout (assuming it might return something, or just success)
        // Based on your reducer logic, it seems to expect { user: ..., token: ... } or similar
        // Let's test a case where it returns nulls, as per your reducer logic's null checks
        const mockLogoutPayload = null; // Or {} or { user: null, token: null } depending on actual API

        // Create a fulfilled action with the mock payload
        const fulfilledAction = logoutApi.fulfilled(mockLogoutPayload, 'requestId', 'arg');

        // Simulate the state update when logoutApi is successful
        // Start from a state where the user is logged in
        const stateBeforeFulfilled = {
            ...initialState,
            loading: true,
            user: 'loggedInUser',
            token: 'valid-token',
            firstName: 'Logged',
            lastName: 'In',
            error: 'Previous error'
        };
        const nextState = usersReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, user and token are set to null, and error is null
        expect(nextState.loading).toBe(false);
        // Based on your reducer's logic `(action.payload as any)?.user || null`,
        // if payload is null, user and token should become null.
        expect(nextState.user).toBeNull();
        expect(nextState.token).toBeNull();
        expect(nextState.error).toBeNull();
        // firstName and lastName might also need to be reset depending on desired behavior
        // The current reducer doesn't explicitly reset them on logout fulfilled.
        // If they should be cleared, you'd add that logic to the reducer and test it here.
        // For now, we test based on the current reducer logic.
        expect(nextState.firstName).toBe('Logged'); // Stays the same based on current reducer
        expect(nextState.lastName).toBe('In'); // Stays the same based on current reducer
        expect(nextState.data).toBeUndefined();
    });

    // Test case for loginApi.fulfilled
    it('should handle loginApi.fulfilled', () => {
        // Define mock payload for login (assuming it puts data into the 'data' field)
        const mockLoginPayload = { success: true, userId: 123 };
        // Create a fulfilled action with the mock payload
        const fulfilledAction = loginApi.fulfilled(mockLoginPayload, 'requestId', 'arg');

        // Simulate the state update when loginApi is successful
        const stateBeforeFulfilled = { ...initialState, loading: true, error: 'Previous error', data: 'old data' };
        const nextState = usersReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, data is updated with the payload, and error is null
        expect(nextState.loading).toBe(false);
        expect(nextState.data).toEqual(mockLoginPayload);
        expect(nextState.error).toBeNull();
        // Other state properties should remain unchanged
        expect(nextState.user).toBeNull();
        expect(nextState.token).toBeNull();
    });

    // Test case for signupApi.fulfilled
    it('should handle signupApi.fulfilled', () => {
        // Define mock payload for signup (assuming it also puts data into the 'data' field)
        const mockSignupPayload = { success: true, message: 'User created' };
        // Create a fulfilled action with the mock payload
        const fulfilledAction = signupApi.fulfilled(mockSignupPayload, 'requestId', 'arg');

        // Simulate the state update when signupApi is successful
        const stateBeforeFulfilled = { ...initialState, loading: true, error: 'Previous error', data: 'old data' };
        const nextState = usersReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, data is updated with the payload, and error is null
        expect(nextState.loading).toBe(false);
        expect(nextState.data).toEqual(mockSignupPayload);
        expect(nextState.error).toBeNull();
        // Other state properties should remain unchanged
        expect(nextState.user).toBeNull();
        expect(nextState.token).toBeNull();
    });


    // Test case for all thunk rejected actions (they share the same logic)
    it('should handle rejected actions (authApi, logoutApi, loginApi, signupApi)', () => {
        // Define mock error payload and error object for testing both scenarios
        const mockErrorPayload = 'API specific error message';
        const mockErrorObject = new Error('Generic network error');

        const rejectedActions = [
            // Rejected with payload
            authApi.rejected(mockErrorPayload, 'requestId', 'arg'),
            logoutApi.rejected(mockErrorPayload, 'requestId', 'arg'),
            loginApi.rejected(mockErrorPayload, 'requestId', 'arg'),
            signupApi.rejected(mockErrorPayload, 'requestId', 'arg'),
            // Rejected with error object (no payload)
            authApi.rejected(null, 'requestId', 'arg', mockErrorObject),
            logoutApi.rejected(null, 'requestId', 'arg', mockErrorObject),
            loginApi.rejected(null, 'requestId', 'arg', mockErrorObject),
            signupApi.rejected(null, 'requestId', 'arg', mockErrorObject),
        ];

        rejectedActions.forEach(action => {
            // Start from a state where loading is true
            const stateBeforeRejected = { ...initialState, loading: true, user: 'user', token: 'token', data: { some: 'data' } };
            // Dispatch the rejected action
            const nextState = usersReducer(stateBeforeRejected, action);

            // Assert that loading is false
            expect(nextState.loading).toBe(false);

            // Assert that error is set correctly (payload takes precedence over error.message)
            if (action.payload !== undefined && action.payload !== null) {
                expect(nextState.error).toBe(action.payload);
            } else if (action.error && action.error.message) {
                expect(nextState.error).toBe(action.error.message);
            } else {
                // If neither payload nor error.message exists, error should be null or undefined
                expect(nextState.error).toBeFalsy(); // Checks for null, undefined, '', 0, false
            }


            // Other state properties should remain unchanged
            expect(nextState.user).toBe('user');
            expect(nextState.token).toBe('token');
            expect(nextState.data).toEqual({ some: 'data' });
        });
    });
});
