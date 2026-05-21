import { describe, it, expect } from 'vitest';
import { boardsReducer } from './boardSlice'; // Adjust the import path to your slice file
// Assuming boardApi is defined in a separate file and exported
// You'll need to import the action types from your thunk
import { boardApi } from '../thunks/boardApi'; // Adjust the import path to your thunk file

describe('boardSlice', () => {
    // Define the initial state as it is in your slice
    const initialState = {
        boards: [],
        loading: false,
        error: null,
    };

    // Test case for the initial state
    it('should return the initial state', () => {
        // When the reducer is called with undefined state and no action,
        // it should return the initial state.
        expect(boardsReducer(undefined, {})).toEqual(initialState);
    });

    // Test case for boardApi.pending
    it('should handle boardApi.pending', () => {
        // Simulate the state when the API call starts
        const nextState = boardsReducer(initialState, boardApi.pending('requestId', 'arg'));

        // Assert that loading is true and error is null
        expect(nextState.loading).toBe(true);
        expect(nextState.error).toBeNull();
        // Boards should remain unchanged
        expect(nextState.boards).toEqual([]);
    });

    // Test case for boardApi.fulfilled
    it('should handle boardApi.fulfilled', () => {
        // Define some mock data that the API would return
        const mockBoardsData = [{ id: 1, title: 'Board 1' }, { id: 2, title: 'Board 2' }];
        // Create a fulfilled action with the mock data as payload
        const fulfilledAction = boardApi.fulfilled(mockBoardsData, 'requestId', 'arg');

        // Simulate the state update when the API call is successful
        // Start from a state where loading might be true
        const stateBeforeFulfilled = { ...initialState, loading: true };
        const nextState = boardsReducer(stateBeforeFulfilled, fulfilledAction);

        // Assert that loading is false, boards are updated with the payload, and error is null
        expect(nextState.loading).toBe(false);
        expect(nextState.boards).toEqual(mockBoardsData);
        expect(nextState.error).toBeNull();
    });

    // Test case for boardApi.rejected (with payload)
    it('should handle boardApi.rejected with payload', () => {
        // Define a mock error payload
        const mockErrorPayload = 'Failed to fetch boards';
        // Create a rejected action with the mock error payload
        const rejectedAction = boardApi.rejected(mockErrorPayload, 'requestId', 'arg');

        // Simulate the state update when the API call fails
        // Start from a state where loading might be true
        const stateBeforeRejected = { ...initialState, loading: true };
        const nextState = boardsReducer(stateBeforeRejected, rejectedAction);

        // Assert that loading is false and error is set to the payload
        expect(nextState.loading).toBe(false);
        expect(nextState.error).toBe(mockErrorPayload);
        // Boards should remain unchanged
        expect(nextState.boards).toEqual([]);
    });
});
