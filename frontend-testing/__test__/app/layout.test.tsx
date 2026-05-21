import { render, screen } from '@testing-library/react';
import { vi } from 'vitest'; // For mocking functions like StoreProvider
import RootLayout from './layout'; // Adjust path if necessary

// Mock StoreProvider (if needed)
vi.mock('./StoreProvider', () => ({
    __esModule: true,
    default: ({ children }) => <div data-testid="store-provider">{children}</div>,
}));

describe('RootLayout', () => {
    it('should wrap children with StoreProvider', () => {
        render(<RootLayout><div data-testid="child-component">Child</div></RootLayout>);

        // Ensure StoreProvider is wrapping the children correctly
        const storeProviderWrapper = screen.getByTestId('store-provider');
        expect(storeProviderWrapper).toBeInTheDocument();

        // Ensure children are rendered inside the StoreProvider
        const childComponent = screen.getByTestId('child-component');
        expect(childComponent).toBeInTheDocument();
        expect(childComponent).toHaveTextContent('Child');
    });

    it('should render the noscript tag for users without JavaScript', () => {
        render(<RootLayout><div>Children</div></RootLayout>);

        // Check if noscript is rendered correctly
        const noscript = screen.getByText(/You need to enable JavaScript to run this app./i);
        expect(noscript).toBeInTheDocument();
    });
});
