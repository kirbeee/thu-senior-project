// src/components/containers/BoardCard.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import BoardCard from './BoardCard';

// Mock Next.js Link to render a plain <a> for testing
vi.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, children }: { href: string; children: React.ReactNode }) => {
        return <a href={href}>{children}</a>;
    },
}));

describe('BoardCard', () => {
    const board = {
        id: 42,
        name: 'Test Board',
        description: 'This is a test board.',
        course_id: 101,
        category: { name: 'General' },
    };

    it('renders the board name, description, and course ID', () => {
        render(<BoardCard board={board} />);

        expect(screen.getByText('Test Board')).toBeInTheDocument();
        expect(screen.getByText('This is a test board.')).toBeInTheDocument();
        expect(screen.getByText(/Course ID: 101/)).toBeInTheDocument();
    });

    it('renders a link to the board with the correct href and text', () => {
        render(<BoardCard board={board} />);

        const link = screen.getByRole('link', { name: /view board/i });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/bbs/boards/42');
        expect(link).toHaveTextContent('View Board');
    });
});
