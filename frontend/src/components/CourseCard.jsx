import React from "react";
import { useRouter } from "next/router"; // 用於路由跳轉
import PropTypes from 'prop-types'; // Import PropTypes
import Link from 'next/link'; // Import Link component from Next.js
const CourseCard = ({ course }) => {
    const router = useRouter();

    const handleCardClick = () => {
        router.push({
            pathname:`/courses/Course/[id]`,
            query: { course_id: course.id }
        });
    };

    return (
        <div
            className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2"
            onClick={handleCardClick}
        >
            <div className="card-body">
                <h2 className="card-title text-lg font-semibold hover:underline cursor-pointer">
                    <Link  href={{
                        pathname:`/courses/Course/[id]`,
                        query: { id: course.id }
                    }}>
                        {course.name}
                    </Link>
                </h2>
                <p>Code: {course.code}</p>
                <p>Credits: {course.credits}</p>
                <p>Description: {course.description}</p>
                <p>Teacher ID: {course.teacher || "Not Assigned"}</p>
                <p>Students Enrolled: {course.students.length}</p>
            </div>
        </div>
    );
};

CourseCard.propTypes = {
    course: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        code: PropTypes.string.isRequired,
        credits: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        teacher: PropTypes.string,
        students: PropTypes.arrayOf(PropTypes.object).isRequired, // students is an array of objects and is required
    }).isRequired,
};

export default CourseCard;