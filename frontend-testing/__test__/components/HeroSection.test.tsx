
// src/components/containers/HeroSection.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import HeroSection from './HeroSection';

// Mock next/link
vi.mock('next/link', () => ({
  __esModule: true,
  default: ({ href, className, children }: any) => (
    <a href={href} className={className}>{children}</a>
  ),
}));

describe('HeroSection Component', () => {
  const translations: Record<string, string> = {
    'hero.title': 'Welcome to Our Platform',
    'hero.description': 'Discover a world of learning.',
    'hero.exploreCourses': 'Explore Courses',
    'hero.signUpNow': 'Sign Up Now',
  };
  const mockT = vi.fn((key: string) => translations[key] || key);

  beforeEach(() => {
    mockT.mockClear();
  });

  it('renders title and description from translations', () => {
    render(<HeroSection t={mockT} />);
    // Title
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(translations['hero.title']);
    // Description
    expect(screen.getByText(translations['hero.description'])).toBeInTheDocument();
  });

  it('renders two links with correct hrefs, classes, and texts', () => {
    render(<HeroSection t={mockT} />);
    const exploreLink = screen.getByRole('link', { name: translations['hero.exploreCourses'] });
    const signUpLink = screen.getByRole('link', { name: translations['hero.signUpNow'] });

    expect(exploreLink).toHaveAttribute('href', '/courses');
    expect(exploreLink).toHaveClass('btn', 'btn-primary');

    expect(signUpLink).toHaveAttribute('href', '/auth/RegistrationSelector');
    expect(signUpLink).toHaveClass('btn', 'btn-secondary');
  });

  it('calls t with all required translation keys', () => {
    render(<HeroSection t={mockT} />);
    expect(mockT).toHaveBeenCalledWith('hero.title');
    expect(mockT).toHaveBeenCalledWith('hero.description');
    expect(mockT).toHaveBeenCalledWith('hero.exploreCourses');
    expect(mockT).toHaveBeenCalledWith('hero.signUpNow');
  });
});
