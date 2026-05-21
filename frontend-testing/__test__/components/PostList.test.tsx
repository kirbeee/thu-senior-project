
// src/components/containers/PostList.test.tsx
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import axios from 'axios';
import PostList from './PostsList';

// Mock next/link to plain <a>
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children }: any) => <a href={href}>{children}</a>,
}));

// Mock date-fns formatDistanceToNow
vi.mock('date-fns', () => ({
  formatDistanceToNow: () => '2 days ago',
}));

// Mock axios to use create().get
vi.mock('axios');
const mockedGet = vi.fn();

beforeEach(() => {
  // axios.create returns instance with get
  vi.mocked(axios.create).mockReturnValue({ get: mockedGet } as any);
});

afterEach(() => {
  vi.clearAllMocks();
});

describe('PostList Component', () => {
  const fakePosts = [
    {
      id: 1,
      title: 'First Post',
      content: 'Content of first post',
      user: { username: 'alice' },
      created_at: new Date().toISOString(),
      post_likes_count: 5,
      comments: [{}, {}],
    },
    {
      id: 2,
      title: 'Second Post',
      content: 'Content of second post',
      user: { username: 'bob' },
      created_at: new Date().toISOString(),
      post_likes_count: 3,
      comments: [{}],
    },
  ];

  const apiResponse = { data: { results: fakePosts } };

  it('shows loading initially', () => {
    mockedGet.mockReturnValue(new Promise(() => {}));
    render(<PostList boardId={123} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });


  it('handles empty results gracefully', async () => {
    mockedGet.mockResolvedValue({ data: { results: [] } });

    render(<PostList boardId={123} />);

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    // No list items
    const list = screen.getByRole('list');
    expect(list.children).toHaveLength(0);
  });
});
