import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import CategorySidebar from './CatagorySidebar';

// Mock next/link to render a simple <a>
vi.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, children, className }: any) => (
        <a href={href} className={className}>{children}</a>
    ),
}));

// Mock axios
vi.mock('axios');
const mockedGet = vi.mocked(axios.get);

describe('CategorySidebar', () => {
    const API_URL = 'https://api.example.com';

    beforeEach(() => {
        // Ensure environment variable is available
        process.env.NEXT_PUBLIC_API_URL = API_URL;
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it('shows loading initially', () => {
        // Render but don’t resolve axios.get yet
        mockedGet.mockReturnValue(new Promise(() => {}));
        render(<CategorySidebar />);
        expect(screen.getByText('Loading categories...')).toBeInTheDocument();
    });

    it('renders categories after successful fetch', async () => {
        const fakeCategories = [
            { id: 1, name: 'Cat One' },
            { id: 2, name: 'Cat Two' },
        ];
        mockedGet.mockResolvedValue({ data: { results: fakeCategories } });

        render(<CategorySidebar />);

        // Wait for the title and list items
        await waitFor(() => {
            expect(screen.getByText('Categories')).toBeInTheDocument();
        });

        // Each category name
        fakeCategories.forEach((cat) => {
            expect(screen.getByText(cat.name)).toBeInTheDocument();
            const link = screen.getByRole('link', { name: cat.name });
            expect(link).toHaveAttribute('href', `/bbs/?category_id=${cat.id}`);
        });
    });

    it('renders an error message if fetch fails', async () => {
        mockedGet.mockRejectedValue(new Error('Network error'));

        render(<CategorySidebar />);

        await waitFor(() => {
            expect(screen.getByText('Failed to load categories.')).toBeInTheDocument();
        });
    });
});
