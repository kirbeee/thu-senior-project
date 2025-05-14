import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import AnnouncementSection from './AnnouncementSection'; // Adjust import path as needed

// Mock the `t` function that returns translation strings
const mockT = vi.fn();

// Sample mock data for testing
const mockAnnouncements = ['Announcement 1', 'Announcement 2', 'Announcement 3'];

describe('AnnouncementSection', () => {
    it('should render a fallback message when t does not return an array', () => {
        // Mock the translation function
        mockT.mockReturnValueOnce('Announcements'); // For 'announcements' key
        mockT.mockReturnValueOnce('No announcements available'); // For 'announcementList' key

        render(<AnnouncementSection t={mockT} />);

        // Check if the title is rendered correctly
        expect(screen.getByText(/announcements/i)).toBeInTheDocument();

        // Check if the fallback message is rendered
        expect(screen.getByText('No announcements available')).toBeInTheDocument();
    });

    it('should call the t function correctly', () => {
        render(<AnnouncementSection t={mockT} />);

        // Check if the t function was called for 'announcements' and 'announcementList'
        expect(mockT).toHaveBeenCalledWith('announcements');
        expect(mockT).toHaveBeenCalledWith('announcementList', { returnObjects: true });
    });
});
