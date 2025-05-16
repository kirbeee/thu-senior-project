import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CallToActionSection from './CallToActionSection';

// Mock next/link to render a plain <a>
vi.mock('next/link', () => ({
    __esModule: true,
    default: ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
        <a href={href} className={className}>
            {children}
        </a>
    ),
}));

describe('CallToActionSection', () => {
    const translations: Record<string, string> = {
        'callToAction.ready': 'Ready to learn?',
        'callToAction.description': 'Join our courses and level up your skills!',
        'callToAction.browseCoursesNow': 'Browse courses now',
    };

    const mockT = vi.fn((key: string) => translations[key] || key);

    beforeEach(() => {
        mockT.mockClear();
    });

    it('renders heading, description, and link text', () => {
        render(<CallToActionSection t={mockT} />);

        // Heading
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(translations['callToAction.ready']);

        // Description paragraph
        expect(screen.getByText(translations['callToAction.description'])).toBeInTheDocument();

        // Link text
        expect(screen.getByText(translations['callToAction.browseCoursesNow'])).toBeInTheDocument();
    });

    it('renders a link to /courses with correct className', () => {
        render(<CallToActionSection t={mockT} />);

        const link = screen.getByRole('link', { name: translations['callToAction.browseCoursesNow'] });
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/courses');
        expect(link).toHaveClass('btn', 'btn-lg', 'btn-primary');
    });

    it('calls the t function with expected keys', () => {
        render(<CallToActionSection t={mockT} />);

        expect(mockT).toHaveBeenCalledWith('callToAction.ready');
        expect(mockT).toHaveBeenCalledWith('callToAction.description');
        expect(mockT).toHaveBeenCalledWith('callToAction.browseCoursesNow');
    });
});
