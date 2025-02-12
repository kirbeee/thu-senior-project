import axios from 'axios';

export const fetchCourses = async (page = 1) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/`, {
        params: { page },
    });
    return response.data;
};

export const fetchBoard = async (page = 1, courseId) => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/`, {
        params: { page },
    });
    return response.data;
}