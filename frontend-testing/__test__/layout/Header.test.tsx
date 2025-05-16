// src/components/layouts/Header.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import Header from './Header';

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, children, className }: any) => <a href={href} className={className}>{children}</a>,
}));

// Mock next/router
const pushMock = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: pushMock,
    pathname: '/',
    asPath: '/',
  }),
}));

// Mock react-redux
let selectorCallback: () => any;
const mockDispatch = vi.fn();
vi.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: (cb: any) => cb({ users: selectorCallback() }),
}));

// Mock next-i18next
const changeLanguageMock = vi.fn();
const tMock = vi.fn((key: string) => key);
vi.mock('next-i18next', () => ({
  useTranslation: () => ({ t: tMock, i18n: { changeLanguage: changeLanguageMock } }),
}));

describe('Header Component', () => {
  beforeEach(() => {
    mockDispatch.mockClear();
    pushMock.mockClear();
    tMock.mockClear();
    changeLanguageMock.mockClear();
  });

  it('renders loading state when loading is true', () => {
    selectorCallback = () => ({ user: null, loading: true });
    render(<Header />);
    // Should find one or more loading buttons
    const loadingButtons = screen.getAllByRole('button', { name: 'loading' });
    expect(loadingButtons.length).toBeGreaterThan(0);
    // All loading buttons have the spinner inside
    loadingButtons.forEach(btn => {
      expect(btn.querySelector('.loading-spinner')).toBeInTheDocument();
    });
  });

  it('shows Sign In and Sign Up when not authenticated', () => {
    selectorCallback = () => ({ user: null, loading: false });
    render(<Header />);
    expect(screen.getAllByText('signIn').length).toBeGreaterThan(0);
    expect(screen.getAllByText('signUp').length).toBeGreaterThan(0);
  });
});
