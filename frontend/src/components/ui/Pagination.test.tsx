import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Pagination from './Pagination'; // Adjust the import path if necessary
import React from 'react';

describe('Pagination', () => {
    // Test case 1: Renders correctly with initial state
    it('renders correctly with current page and total pages', () => {
        const currentPage = 3;
        const totalPages = 5;
        const onPageChange = vi.fn(); // Mock the onPageChange function

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Check if the current page and total pages are displayed
        expect(screen.getByText(`Page ${currentPage} of ${totalPages}`)).toBeInTheDocument();

        // Check if the previous and next buttons are enabled
        expect(screen.getByText('<<')).toBeEnabled();
        expect(screen.getByText('>>')).toBeEnabled();
    });

    // Test case 2: Previous button is disabled on the first page
    it('disables the previous button on the first page', () => {
        const currentPage = 1;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Check if the previous button is disabled
        expect(screen.getByText('<<')).toBeDisabled();

        // Check if the next button is enabled
        expect(screen.getByText('>>')).toBeEnabled();
    });

    // Test case 3: Next button is disabled on the last page
    it('disables the next button on the last page', () => {
        const currentPage = 5;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Check if the next button is disabled
        expect(screen.getByText('>>')).toBeDisabled();

        // Check if the previous button is enabled
        expect(screen.getByText('<<')).toBeEnabled();
    });

    // Test case 4: Clicking previous button calls onPageChange with correct page
    it('calls onPageChange with the previous page number when clicking "<<""', () => {
        const currentPage = 3;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Click the previous button
        fireEvent.click(screen.getByText('<<'));

        // Check if onPageChange was called once with the correct page number
        expect(onPageChange).toHaveBeenCalledTimes(1);
        expect(onPageChange).toHaveBeenCalledWith(currentPage - 1);
    });

    // Test case 5: Clicking next button calls onPageChange with correct page
    it('calls onPageChange with the next page number when clicking ">>""', () => {
        const currentPage = 3;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Click the next button
        fireEvent.click(screen.getByText('>>'));

        // Check if onPageChange was called once with the correct page number
        expect(onPageChange).toHaveBeenCalledTimes(1);
        expect(onPageChange).toHaveBeenCalledWith(currentPage + 1);
    });

    // Test case 6: Clicking disabled previous button does not call onPageChange
    it('does not call onPageChange when clicking the disabled previous button', () => {
        const currentPage = 1;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Click the disabled previous button
        fireEvent.click(screen.getByText('<<'));

        // Check that onPageChange was not called
        expect(onPageChange).not.toHaveBeenCalled();
    });

    // Test case 7: Clicking disabled next button does not call onPageChange
    it('does not call onPageChange when clicking the disabled next button', () => {
        const currentPage = 5;
        const totalPages = 5;
        const onPageChange = vi.fn();

        render(
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
            />
        );

        // Click the disabled next button
        fireEvent.click(screen.getByText('>>'));

        // Check that onPageChange was not called
        expect(onPageChange).not.toHaveBeenCalled();
    });
});
