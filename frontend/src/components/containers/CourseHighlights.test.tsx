
// src/components/containers/CourseHighlights.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock CourseCard component
vi.mock('@components/containers/CourseCard', () => ({
  __esModule: true,
  default: ({ course }: { course: any }) => (
    <div data-testid="course-card">{course.name}</div>
  ),
}));

import CourseHighlights from './CourseHighlights';

describe('CourseHighlights', () => {
  const translations: Record<string, string> = {
    'featuredCourses': 'Featured Courses',
    'courseTitles.introCS': 'Introduction to CS',
    'courseDescriptions.introCS': 'Learn basics of CS.',
    'courseTitles.calculus1': 'Calculus I',
    'courseDescriptions.calculus1': 'Differential calculus.',
    'courseTitles.linearAlgebra': 'Linear Algebra',
    'courseDescriptions.linearAlgebra': 'Matrix theory.',
  };
  const mockT = vi.fn((key: string) => translations[key] || key);

  beforeEach(() => {
    mockT.mockClear();
  });

  it('renders heading from translation', () => {
    render(<CourseHighlights t={mockT} />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent(translations['featuredCourses']);
  });

  it('renders a CourseCard for each course', () => {
    render(<CourseHighlights t={mockT} />);
    const cards = screen.getAllByTestId('course-card');
    expect(cards).toHaveLength(3);
    // Verify each course name appears
    expect(cards[0]).toHaveTextContent(translations['courseTitles.introCS']);
    expect(cards[1]).toHaveTextContent(translations['courseTitles.calculus1']);
    expect(cards[2]).toHaveTextContent(translations['courseTitles.linearAlgebra']);
  });

  it('calls t for each required translation key', () => {
    render(<CourseHighlights t={mockT} />);
    // header
    expect(mockT).toHaveBeenCalledWith('featuredCourses');
    // each course title and description
    expect(mockT).toHaveBeenCalledWith('courseTitles.introCS');
    expect(mockT).toHaveBeenCalledWith('courseDescriptions.introCS');
    expect(mockT).toHaveBeenCalledWith('courseTitles.calculus1');
    expect(mockT).toHaveBeenCalledWith('courseDescriptions.calculus1');
    expect(mockT).toHaveBeenCalledWith('courseTitles.linearAlgebra');
    expect(mockT).toHaveBeenCalledWith('courseDescriptions.linearAlgebra');
  });
});
