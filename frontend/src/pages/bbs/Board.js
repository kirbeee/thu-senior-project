import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BoardCard from "../../components/BoardCard";
import Pagination from "../../components/Pagination";
import CategorySidebar from "../../components/CatagorySidebar";
import axios from "axios";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'; // 引入 serverSideTranslations
import i18nConfig from '../../../next-i18next.config'; // 引入 i18nConfig

const Board = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages] = useState(1);
    const [courseDescription, setCourseDescription] = useState("All Boards Post");
    const router = useRouter();
    const { course_id: courseId = null, page = 1, category_id: categoryId = null } = router.query;
    const { t } = useTranslation('boards');

    useEffect(() => {
        const loadBoardsAndData = async () => { // Combined function name
            setLoading(true);
            let fetchedBoards = []; // Use let to reassign
            let fetchedCourseDescription = ""; // Use let to reassign

            try {
                const queryParams = new URLSearchParams();
                if (courseId) queryParams.append("course_id", courseId);
                if (categoryId) queryParams.append("category_id", categoryId);
                queryParams.append("page", page);

                // Fetch Boards
                const boardsResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/?${queryParams.toString()}`);
                fetchedBoards = boardsResponse.data.results; // Store fetched boards

                    try {
                        const courseResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/categories/${categoryId}/`);
                        fetchedCourseDescription = courseResponse.data.description; // Store fetched description
                    } catch (courseError) {
                        fetchedCourseDescription = "Failed to load course description."; // Error message
                    }


            } catch (error) {
                console.error("Error fetching boards:", error);
            } finally {
                setBoards(fetchedBoards); // Set boards state here
                setCourseDescription(fetchedCourseDescription); // Set description state here
                setLoading(false);
            }
        };
        loadBoardsAndData(); // Call the combined function
    }, [courseId, page, categoryId]);

    const handlePageChange = (newPage) => {
        router.push({
            pathname: '/bbs/Boards',
            query: { course_id: courseId, page: newPage, category_id: categoryId },
        });
    };

    return (
        <div className="p-6 flex">
            <aside className="w-1/4 pr-6">
                <CategorySidebar />
            </aside>

            <main className="w-3/4">
                <div className="mb-6 flex justify-between items-center">
                    {courseDescription && (
                        <div className="mb-4 text-gray-700">
                            {courseDescription}
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="text-center py-8">
                        <p className="text-lg text-gray-600 animate-pulse">{t('loadingBoards')}</p>
                    </div>
                ) : boards.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {boards.map((board) => (
                            <BoardCard key={board.id} board={board} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-600 italic">{t('noBoardsAvailable')}</p>
                    </div>
                )}

                <div className="mt-8 flex justify-center">
                    <Pagination
                        currentPage={Number(page) || 1}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </main>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => ({ // 加入 getStaticProps
    props: {
        ...(await serverSideTranslations(locale, ['boards', 'header', 'common'], i18nConfig)), // 載入 'boards', 'header', 和 'common' 命名空間
    },
});

export default Board;