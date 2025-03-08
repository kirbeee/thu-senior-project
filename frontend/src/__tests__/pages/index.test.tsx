import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../../pages/index';
import { describe, it, expect, vi } from 'vitest'; // Keep this for now for clarity

// Mock next-i18next useTranslation hook
vi.mock('next-i18next', () => ({
    useTranslation: () => {
        return {
            t: (key) => key, // Simple mock for translation function, returns the key itself
            i18n: {
                language: 'en',
            },
        };
    },
    serverSideTranslations: vi.fn().mockResolvedValue({}), // Mock serverSideTranslations - keep vi.fn()
    withTranslation: (namespace) => (WrappedComponent) => (props) => {
        WrappedComponent.defaultProps = { ...WrappedComponent.defaultProps, i18nNamespace: namespace };
        return <WrappedComponent {...props} t={(key) => key} />; // Mock withTranslation to pass t function
    },
}));

// Mock child components to isolate testing of Index component
vi.mock('@components/containers/HeroSection', () => ({ default: ({ t }) => <div data-testid="hero-section">{t('heroSection.title')}</div> }));
vi.mock('@components/containers/CourseHighlights', () => ({ default: ({ t }) => <div data-testid="course-highlights">{t('courseHighlights.title')}</div> }));
vi.mock('@components/containers/AnnouncementSection', () => ({ default: ({ t }) => <div data-testid="announcement-section">{t('announcementSection.title')}</div> }));
vi.mock('@components/containers/FeatureList', () => ({ default: ({ t }) => <div data-testid="feature-list">{t('featureList.title')}</div> }));
vi.mock('@components/containers/CallToActionSection', () => ({ default: ({ t }) => <div data-testid="call-to-action-section">{t('callToActionSection.title')}</div> }));

describe('Index Component', () => {
    it('should render all sections', () => {
        render(<Index />);

        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByTestId('course-highlights')).toBeInTheDocument();
        expect(screen.getByTestId('feature-list')).toBeInTheDocument();
        expect(screen.getByTestId('announcement-section')).toBeInTheDocument();
        expect(screen.getByTestId('call-to-action-section')).toBeInTheDocument();
    });

    it('should pass the t function to child components', () => {
        render(<Index />);

        expect(screen.getByTestId('hero-section')).toHaveTextContent('heroSection.title');
        expect(screen.getByTestId('course-highlights')).toHaveTextContent('courseHighlights.title');
        expect(screen.getByTestId('feature-list')).toHaveTextContent('featureList.title');
        expect(screen.getByTestId('announcement-section')).toHaveTextContent('announcementSection.title');
        expect(screen.getByTestId('call-to-action-section')).toHaveTextContent('callToActionSection.title');
    });
});
