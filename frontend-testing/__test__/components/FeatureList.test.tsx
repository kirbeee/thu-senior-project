
// src/components/containers/FeatureList.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import FeatureList from './FeatureList';

describe('FeatureList Component', () => {
  const translations: Record<string, string> = {
    'keyFeatures': 'Key Features',
    'features.easySearch.title': 'Easy Search',
    'features.easySearch.description': 'Quickly find what you need.',
    'features.personalizedSchedule.title': 'Personalized Schedule',
    'features.personalizedSchedule.description': 'Customize your timetable.',
    'features.enrollmentManagement.title': 'Enrollment Management',
    'features.enrollmentManagement.description': 'Manage enrollments effortlessly.',
  };
  const mockT = vi.fn((key: string) => translations[key] || key);

  beforeEach(() => {
    mockT.mockClear();
  });

  it('renders the section heading from translation', () => {
    render(<FeatureList t={mockT} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(translations['keyFeatures']);
  });

  it('renders three feature items with correct titles and descriptions', () => {
    render(<FeatureList t={mockT} />);

    // Check titles (h4)
    const itemHeadings = screen.getAllByRole('heading', { level: 4 });
    expect(itemHeadings).toHaveLength(3);
    expect(itemHeadings[0]).toHaveTextContent(translations['features.easySearch.title']);
    expect(itemHeadings[1]).toHaveTextContent(translations['features.personalizedSchedule.title']);
    expect(itemHeadings[2]).toHaveTextContent(translations['features.enrollmentManagement.title']);

    // Check descriptions
    expect(screen.getByText(translations['features.easySearch.description'])).toBeInTheDocument();
    expect(screen.getByText(translations['features.personalizedSchedule.description'])).toBeInTheDocument();
    expect(screen.getByText(translations['features.enrollmentManagement.description'])).toBeInTheDocument();
  });

  it('renders an icon SVG for each feature item', () => {
    const { container } = render(<FeatureList t={mockT} />);
    const svgs = container.querySelectorAll('svg');
    expect(svgs).toHaveLength(3);
  });

  it('calls t for all expected translation keys', () => {
    render(<FeatureList t={mockT} />);
    // Verify t calls
    expect(mockT).toHaveBeenCalledWith('keyFeatures');
    expect(mockT).toHaveBeenCalledWith('features.easySearch.title');
    expect(mockT).toHaveBeenCalledWith('features.easySearch.description');
    expect(mockT).toHaveBeenCalledWith('features.personalizedSchedule.title');
    expect(mockT).toHaveBeenCalledWith('features.personalizedSchedule.description');
    expect(mockT).toHaveBeenCalledWith('features.enrollmentManagement.title');
    expect(mockT).toHaveBeenCalledWith('features.enrollmentManagement.description');
  });
});
