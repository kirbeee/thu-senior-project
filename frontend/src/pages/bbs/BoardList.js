import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BoardCard from "./BoardCard"; // 自定義的板卡顯示組件
import Pagination from "../../components/Pagination"; // 分頁組件

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(1);

    const router = useRouter();
    const { course_id: courseId = null, page = 1 } = router.query;

    useEffect(() => {
        const loadBoards = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
                if (courseId) queryParams.append("course_id", courseId);
                queryParams.append("page", page);

                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/?${queryParams.toString()}`);
                const data = await response.json();

                setBoards(data.results);
                setTotalPages(Math.ceil(data.count / 10)); // 假設每頁顯示 10 筆數據
            } catch (error) {
                console.error("Error fetching boards:", error);
            } finally {
                setLoading(false);
            }
        };

        loadBoards();
    }, [courseId, page]);

    const handlePageChange = (newPage) => {
        router.push({
            pathname: '/bbs/boards',
            query: { course_id: courseId, page: newPage },
        });
    };

    return (
        <div className="p-4">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {boards.map((board) => (
                        <BoardCard key={board.id} board={board} />
                    ))}
                </div>
            )}
            <div className="mt-6 flex justify-center">
                <Pagination
                    currentPage={Number(page) || 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default BoardList;
