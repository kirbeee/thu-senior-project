import React, {useState, useEffect} from "react";
import {fetchCourses} from "../../lib/apis/api";
import CourseCard from "../../components/CourseCard";
import Pagination from "../../components/Pagination";

const Course = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const loadCourses = async () => {
            setLoading(true);
            try {
                const data = await fetchCourses(currentPage);
                setCourses(data.results);
                setTotalPages(Math.ceil(data.count / 10)); // Assuming 10 courses per page
            } catch (error) {
                console.error("Error fetching courses:", error);
            } finally {
                setLoading(false);
            }
        };
        loadCourses();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="p-4">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </div>
            )}
            <div className="mt-6 flex justify-center">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Course;