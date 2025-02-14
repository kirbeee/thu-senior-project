import axios from 'axios';

export const fetchCourses = async (page = 1) => {
    // eslint-disable-next-line no-undef
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/courses/`, {
        params: { page },
    });
    return response.data;
};

export const fetchBoard = async (page = 1) => {
    // eslint-disable-next-line no-undef
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/`, {
        params: { page },
    });
    return response.data;
}