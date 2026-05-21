
// src/components/Footer.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import Footer from './Footer';

describe('Footer Component', () => {
  const realDate = Date;

  beforeAll(() => {
    // Mock Date to control year
    const mockedDate = new Date('2025-01-01T00:00:00Z');
    global.Date = class extends Date {
      constructor(...args: any[]) {
        if (args.length) {
          // @ts-ignore
          return new realDate(...args);
        }
        return mockedDate;
      }
      static now() {
        return mockedDate.getTime();
      }
    } as any;
  });

  afterAll(() => {
    // Restore real Date
    global.Date = realDate;
  });

  it('renders the correct copyright year', () => {
    render(<Footer />);
    const yearText = screen.getByText(/© 2025 THU Helper/);
    expect(yearText).toBeInTheDocument();
  });

  it('renders links with correct hrefs and text', () => {
    render(<Footer />);
    const links = [
      { text: 'Privacy Policy', href: '/privacy' },
      { text: 'Terms of Service', href: '/terms' },
      { text: 'Contact Us', href: '/contact' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});
