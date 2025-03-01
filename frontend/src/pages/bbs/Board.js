import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import BoardCard from "../../components/BoardCard";
import Pagination from "../../components/Pagination";
import axios from "axios";

const Board = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalPages] = useState(1);
    const router = useRouter();
    const { course_id: courseId = null, page = 1 } = router.query;

    useEffect(() => {
        const loadBoards = async () => {
            setLoading(true);
            try {
                const queryParams = new URLSearchParams();
                if (courseId) queryParams.append("course_id", courseId);
                queryParams.append("page", page);

                const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/?${queryParams.toString()}`);
                const data = response.data;
                setBoards(data.results);
                // setTotalPages(data.totalPages || 1); // Example if API returns totalPages
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
            pathname: '/bbs/Boards', // Corrected to use correct path
            query: { course_id: courseId, page: newPage }, // Corrected to use course_id for query
        });
    };

    const handleCreateBoardClick = () => {
        router.push({
            pathname: '/bbs/CreatePost', // Keep this path if intended for dynamic board creation
            query: { course_id: courseId } , // Keep course_id if relevant for board creation context
        });
    };

    return (
        <div className="p-6">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800">
                    Course Boards
                </h2>
                <button
                    onClick={handleCreateBoardClick}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Create New Board
                </button>
            </div>

            {loading ? (
                <div className="text-center py-8">
                    <p className="text-lg text-gray-600 animate-pulse">Loading Boards...</p>
                </div>
            ) : boards.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {boards.map((board) => (
                        <BoardCard key={board.id} board={board} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-600 italic">No boards available yet. Click "Create New Board" to add one.</p>
                </div>
            )}

            <div className="mt-8 flex justify-center">
                <Pagination
                    currentPage={Number(page) || 1}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default Board;