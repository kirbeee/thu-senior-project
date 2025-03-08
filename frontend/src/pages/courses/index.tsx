import React, {useState, useEffect} from "react";
import {fetchCourses} from "@lib/apis/api";
import CourseCard from "@components/containers/CourseCard";
import Pagination from "@components/ui/Pagination";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; // 引入 serverSideTranslations
import i18nConfig from '../../../next-i18next.config'; // 引入 i18nConfig

const Index = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { t } = useTranslation('courses');

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
                <p className="text-center">{t('loading')}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {courses.map((course) => (
                        <CourseCard course={course}/>
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

export const getStaticProps = async ({ locale }) => ({ // 加入 getStaticProps
    props: {
        ...(await serverSideTranslations(locale, ['courses', 'header', 'common'], i18nConfig)), // 載入 'courses', 'header', 和 'common' 命名空間
    },
});


export default Index;