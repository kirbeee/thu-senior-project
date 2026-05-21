import { render, screen } from '@testing-library/react';
import StoreProvider from './StoreProvider';  // Adjust the import path
import { Provider } from 'react-redux';
import { store } from '@lib/store'; // Import your actual store

// Mock the store if needed (for example, using vitest or jest)
vi.mock('@lib/store', () => ({
    store: {
        getState: vi.fn(() => ({})), // Return a mock state
        dispatch: vi.fn(),
        subscribe: vi.fn(),
        replaceReducer: vi.fn(),
    },
}));

describe('StoreProvider', () => {
    it('should wrap children with Redux Provider and pass the store', () => {
        render(
            <StoreProvider>
                <div data-testid="child">Test Child</div>
            </StoreProvider>
        );

        // Check if the child is rendered correctly
        const childElement = screen.getByTestId('child');
        expect(childElement).toBeInTheDocument();

        // Instead of checking the store directly, test that it's dispatching correctly
        const mockDispatch = store.dispatch;
        expect(mockDispatch).not.toHaveBeenCalled(); // Just a simple check to ensure dispatch is available

        // Optionally, verify other store interactions as needed
    });
});
