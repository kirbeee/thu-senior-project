import { describe, it, expect } from 'vitest';
import { courseReducer } from './courseSlice'; // Adjust the import path to your slice file
// Assuming courseApi is defined in a separate file and exported
// You'll need to import the action types from your thunk
import { courseApi } from '../thunks/courseApi'; // Adjust the import path to your thunk file

describe('courseSlice', () => {
    // Define the initial state as it is in your slice
    const initialState = {
        boards: [], // Note: The state key is 'boards' in your slice's initialState
        loading: false,
        error: null,
    };

    // Test case for the initial state
    it('should return the initial state', () => {
        // When the reducer is called with undefined state and no action,
        // it should return the initial state.
        expect(courseReducer(undefined, {})).toEqual(initialState);
    });

    // Test case for courseApi.pending
    it('should handle courseApi.pending', () => {
        // Simulate the state when the API call starts
        const nextState = courseReducer(initialState, courseApi.pending('requestId', 'arg'));

        // Assert that loading is true and error is null
        expect(nextState.loading).toBe(true);
        expect(nextState.error).toBeNull();
        // 'boards' should remain unchanged
        expect(nextState.boards).toEqual([]);
    });

    // Test case for courseApi.fulfilled
    it('should handle courseApi.fulfilled', () => {
        // Define some mock data that the API would return (courses data)
        const mockCoursesData = [{ id: 1, name: 'Course A' }, { id: 2, name: 'Course B' }];
        // Create a fulfilled action with the mock data as payload
        const fulfilledAction = courseApi.fulfilled(mockCoursesData, 'requestId', 'arg');

        // Simulate the state update when the API call is successful
        // Start from a state where loading might be true
        const stateBeforeFulfilled = { ...initialState, loading: true };
        const nextState = courseReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, 'boards' are updated with the payload, and error is null
        // Note: The reducer updates 'state.boards' with the course data payload.
        expect(nextState.loading).toBe(false);
        expect(nextState.boards).toEqual(mockCoursesData); // Expect 'boards' to contain the course data
        expect(nextState.error).toBeNull();
    });

    // Test case for courseApi.rejected (with payload)
    it('should handle courseApi.rejected with payload', () => {
        // Define a mock error payload
        const mockErrorPayload = 'Failed to fetch courses';
        // Create a rejected action with the mock error payload
        const rejectedAction = courseApi.rejected(mockErrorPayload, 'requestId', 'arg');

        // Simulate the state update when the API call fails
        // Start from a state where loading might be true
        const stateBeforeRejected = { ...initialState, loading: true };
        const nextState = courseReducer(stateBeforeRejected, rejectedAction);

        // Assert that loading is false and error is set to the payload
        expect(nextState.loading).toBe(false);
        expect(nextState.error).toBe(mockErrorPayload);
        // 'boards' should remain unchanged
        expect(nextState.boards).toEqual([]);
    });

    // Test case for courseApi.rejected (with action.error.message)
});
