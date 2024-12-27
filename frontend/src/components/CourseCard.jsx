import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/bbs/board/${course.id}`);
    }
    return (
        <div className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2"
             onClick={handleCardClick}>
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

export default CourseCard;
