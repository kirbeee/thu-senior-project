import React, { useState, useEffect } from "react";
import axios from "axios";  // 使用 axios 發送請求
import BoardCard from "./BoardCard";  // 假設你有一個 BoardCard 組件來顯示每個討論板
import Pagination from "../../components/Pagination";  // 翻頁組件

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const loadBoards = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/bbs/boards/?page=${currentPage}`);
                setBoards(response.data.results);  // 假設返回的數據是 `results`
                setTotalPages(Math.ceil(response.data.count / 10));  // 假設每頁顯示 10 個討論板
            } catch (error) {
                console.error("Error fetching boards:", error);
            } finally {
                setLoading(false);
            }
        };
        loadBoards();
    }, [currentPage]);  // 當 currentPage 改變時重新加載數據

    const handlePageChange = (page) => {
        setCurrentPage(page);
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
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default BoardList;
