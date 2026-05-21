
// src/components/Comment.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import Comment from './Comment';

// Mock axios.post
vi.mock('axios');
const mockedPost = vi.mocked(axios.post);

describe('Comment Component', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.clearAllMocks();
        vi.useRealTimers();
    });

    it('renders the comment section correctly', () => {
        render(<Comment postId={1} userId={1} />);
        expect(screen.getByText('Comment Actions')).toBeInTheDocument();
        expect(screen.getByText('Add New Comment')).toBeInTheDocument();
        expect(screen.getByRole('textbox')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add Comment' })).toBeInTheDocument();
    });

    it('updates textarea value on change', () => {
        render(<Comment postId={1} userId={1} />);
        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'Test comment' } });
        expect(textarea).toHaveValue('Test comment');
    });

    it('calls onCommentCreated and shows success message on successful post', async () => {
        const onCommentCreated = vi.fn();
        mockedPost.mockResolvedValue({ status: 201 });

        render(<Comment postId={1} userId={1} onCommentCreated={onCommentCreated} />);

        const textarea = screen.getByRole('textbox');
        fireEvent.change(textarea, { target: { value: 'New comment' } });

        const button = screen.getByRole('button', { name: 'Add Comment' });
        fireEvent.click(button);

        // Button should show loading state
        expect(button).toHaveClass('loading');

        // Wait for post to resolve and callback to be called
        await waitFor(() => {
            expect(onCommentCreated).toHaveBeenCalled();
        });

        // Success message appears
        expect(screen.getByText('Success!')).toBeInTheDocument();

        // After 3 seconds timer, status clears
        vi.advanceTimersByTime(3000);
        await waitFor(() => {
            expect(screen.queryByText('Success!')).toBeNull();
        });
    });

    it('shows error message on failed post', async () => {
        mockedPost.mockRejectedValue(new Error('Network Error'));

        render(<Comment postId={1} userId={1} />);

        const button = screen.getByRole('button', { name: 'Add Comment' });
        fireEvent.click(button);

        await waitFor(() => {
            expect(screen.getByText('Error. Please try again.')).toBeInTheDocument();
        });

        // Clears after 3 seconds
        vi.advanceTimersByTime(3000);
        await waitFor(() => {
            expect(screen.queryByText('Error. Please try again.')).toBeNull();
        });
    });
});
