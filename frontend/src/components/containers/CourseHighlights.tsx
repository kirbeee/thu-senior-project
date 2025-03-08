import PropTypes from "prop-types";
import React from "react";
import CourseCard from "@components/containers/CourseCard";

const CourseHighlights = ({ t }) => {
    const courses = [
        {
            id: 1,
            name: t('courseTitles.introCS'),
            code: "CS101",
            credits: 3,
            description: t('courseDescriptions.introCS'),
            teacher: "Prof. Smith",
            students: []
        },
        {
            id: 2,
            name: t('courseTitles.calculus1'),
            code: "MA201",
            credits: 4,
            description: t('courseDescriptions.calculus1'),
            teacher: "Dr. Jones",
            students: []
        },
        {
            id: 3,
            name: t('courseTitles.linearAlgebra'),
            code: "MA250",
            credits: 3,
            description: t('courseDescriptions.linearAlgebra'),
            teacher: "Prof. Davis",
            students: [],
        },
    ];
    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('featuredCourses')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map(course => (
                    <CourseCard course={course}/>
                ))}
            </div>
        </section>
    );
};

CourseHighlights.propTypes = {
    t: PropTypes.func.isRequired,
};

export default CourseHighlights;