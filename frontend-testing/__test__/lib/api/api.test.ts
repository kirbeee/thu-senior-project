import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { fetchCourses, fetchBoard } from './api'; // Adjust the import path to your file

// Mock the entire axios module
// This tells Vitest to replace the actual 'axios' import with our mock implementation
vi.mock('axios');

// Cast axios to a MockedFunction to access mock-specific methods like .get
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Define the base API URL that your functions use
const API_URL = process.env.NEXT_PUBLIC_API_URL; // Ensure this environment variable is set in your test environment or mock it

describe('API Functions', () => {

    // Reset the mock before each test to ensure a clean state
    beforeEach(() => {
        mockedAxios.get.mockClear(); // Clear any previous calls to axios.get
    });

    describe('fetchCourses', () => {
        it('should fetch courses with default page 1', async () => {
            // Define the mock response data for this specific test
            const mockCoursesData = {
                count: 10,
                next: null,
                previous: null,
                results: [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }],
            };

            // Configure the mocked axios.get to return the mock data
            // The .mockResolvedValue method makes the mocked function return a Promise that resolves with the given value
            mockedAxios.get.mockResolvedValue({ data: mockCoursesData });

            // Call the function being tested
            const courses = await fetchCourses();

            // Assert that axios.get was called with the correct URL and parameters
            expect(mockedAxios.get).toHaveBeenCalledWith(
                `${API_URL}/school_system/courses/`,
                { params: { page: 1 } }
            );

            // Assert that the function returned the expected data
            expect(courses).toEqual(mockCoursesData);
        });

        it('should fetch courses with a specific page number', async () => {
            const mockCoursesData = {
                count: 10,
                next: null,
                previous: null,
                results: [{ id: 3, name: 'Course 3' }],
            };
            const pageNumber = 2;

            mockedAxios.get.mockResolvedValue({ data: mockCoursesData });

            const courses = await fetchCourses(pageNumber);

            expect(mockedAxios.get).toHaveBeenCalledWith(
                `${API_URL}/school_system/courses/`,
                { params: { page: pageNumber } }
            );

            expect(courses).toEqual(mockCoursesData);
        });

        // You might want to add tests for error handling as well
        // it('should handle errors when fetching courses', async () => {
        //   const errorMessage = 'Network Error';
        //   mockedAxios.get.mockRejectedValue(new Error(errorMessage));

        //   await expect(fetchCourses()).rejects.toThrow(errorMessage);
        // });
    });

    describe('fetchBoard', () => {
        it('should fetch board data with default page 1', async () => {
            const mockBoardData = {
                count: 20,
                next: null,
                previous: null,
                results: [{ id: 101, title: 'Post 1' }],
            };

            mockedAxios.get.mockResolvedValue({ data: mockBoardData });

            const boardData = await fetchBoard();

            expect(mockedAxios.get).toHaveBeenCalledWith(
                `${API_URL}/bbs/boards/`,
                { params: { page: 1 } }
            );

            expect(boardData).toEqual(mockBoardData);
        });

        it('should fetch board data with a specific page number', async () => {
            const mockBoardData = {
                count: 20,
                next: null,
                previous: null,
                results: [{ id: 105, title: 'Post 5' }],
            };
            const pageNumber = 3;

            mockedAxios.get.mockResolvedValue({ data: mockBoardData });

            const boardData = await fetchBoard(pageNumber);

            expect(mockedAxios.get).toHaveBeenCalledWith(
                `${API_URL}/bbs/boards/`,
                { params: { page: pageNumber } }
            );

            expect(boardData).toEqual(mockBoardData);
        });

        // You might want to add tests for error handling as well
        // it('should handle errors when fetching board data', async () => {
        //   const errorMessage = 'API Error';
        //   mockedAxios.get.mockRejectedValue(new Error(errorMessage));

        //   await expect(fetchBoard()).rejects.toThrow(errorMessage);
        // });
    });
});
