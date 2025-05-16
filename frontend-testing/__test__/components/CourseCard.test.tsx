
// src/components/containers/CourseCard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import CourseCard from './CourseCard';

// Mock next/router
const pushMock = vi.fn();
vi.mock('next/router', () => ({
    useRouter: () => ({
        push: pushMock,
    }),
}));

describe('CourseCard Component', () => {
    const course = {
        id: 10,
        name: 'Test Course',
        code: 'TC101',
        credits: 3,
        description: 'A test course description.',
        teacher: 'Prof. Tester',
        students: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };

    beforeEach(() => {
        pushMock.mockClear();
    });

    it('renders all course details correctly', () => {
        render(<CourseCard course={course} />);
        expect(screen.getByText('Test Course')).toBeInTheDocument();
        expect(screen.getByText(/Code: TC101/)).toBeInTheDocument();
        expect(screen.getByText(/Credits: 3/)).toBeInTheDocument();
        expect(screen.getByText(/Description: A test course description./)).toBeInTheDocument();
        expect(screen.getByText(/Teacher ID: Prof. Tester/)).toBeInTheDocument();
        expect(screen.getByText(/Students Enrolled: 3/)).toBeInTheDocument();
    });

    it('uses fallback when teacher is not provided', () => {
        const noTeacherCourse = { ...course, teacher: null };
        render(<CourseCard course={noTeacherCourse} />);
        expect(screen.getByText(/Teacher ID: Not Assigned/)).toBeInTheDocument();
    });

    it('navigates to correct course page on click', () => {
        render(<CourseCard course={course} />);
        const card = screen.getByText('Test Course').closest('div');
        // Simulate click
        if (card) {
            fireEvent.click(card);
        }
        expect(pushMock).toHaveBeenCalledWith({
            pathname: '/courses/[id]',
            query: { id: course.id },
        });
    });
});
