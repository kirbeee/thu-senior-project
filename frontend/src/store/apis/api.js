import axios from 'axios';

const API_BASE_URL = "http://localhost:8000";

export const fetchCourses = async (page = 1) => {
    const response = await axios.get(`${API_BASE_URL}/courses/`, {
        params: { page },
    });
    return response.data;
};

export const fetchBoard = async (page = 1, courseId) => {
    const response = await axios.get(`${API_BASE_URL}/bbs/boards/`, {
        params: { page },
    });
    return response.data;
}