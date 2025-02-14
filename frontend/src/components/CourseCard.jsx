import React from "react";
import { useRouter } from "next/router"; // 用於路由跳轉
import PropTypes from 'prop-types'; // Import PropTypes

const CourseCard = ({ course }) => {
    const router = useRouter();

    const handleCardClick = () => {
        // 使用 router.push 跳轉並附帶 course_id 查詢參數
        router.push(`/bbs/boards?course_id=${course.id}`);
    };

    return (
        <div
            className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2"
            onClick={handleCardClick}
        >
            <div className="card-body">
                <h3 className="card-title">{course.name}</h3>
                <p>Code: {course.code}</p>
                <p>Credits: {course.credits}</p>
                <p>Description: {course.description}</p>
                <p>Teacher ID: {course.teacher || "Not Assigned"}</p>
                <p>Students Enrolled: {course.students.length}</p>
            </div>
        </div>
    );
};

CourseCard.propTypes = { // Define propTypes for CourseCard
    course: PropTypes.shape({ // course prop should be an object with specific shape
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        credits: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        teacher: PropTypes.string, // Optional teacher (string)
        students: PropTypes.arrayOf(PropTypes.object).isRequired, // students is an array of objects and is required
        // Assuming students is always an array, even if empty. If it could be null/undefined, make it optional and handle null case
    }).isRequired,
};

export default CourseCard;