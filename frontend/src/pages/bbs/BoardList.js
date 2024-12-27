import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";  // 用來獲取 URL 查詢參數
import BoardCard from "./BoardCard";  // 顯示每個 board 的組件
import Pagination from "../../components/Pagination";  // 翻頁組件
import { fetchBoard } from "../../store/apis/api";

const BoardList = () => {
    const [boards, setBoards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // 使用 useLocation 獲取 URL 查詢參數
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const courseId = queryParams.get("course_id");  // 取得 course_id 查詢參數

    useEffect(() => {
        const loadBoards = async () => {
            setLoading(true);
            try {
                // 如果有 course_id 就帶上，如果沒有就不帶
                const url = courseId
                    ? `/bbs/boards/?course_id=${courseId}&page=${currentPage}`
                    : `/bbs/boards/?page=${currentPage}`;
                const response = await axios.get(url,{
                    params: { currentPage },
                });
                setBoards(response.data.results);
                setTotalPages(Math.ceil(response.data.count / 10));  // 假設每頁顯示 10 個討論板
            } catch (error) {
                console.error("Error fetching boards:", error);
            } finally {
                setLoading(false);
            }
        };
        loadBoards();
    }, [courseId, currentPage]);  // 當 courseId 或 page 改變時重新加載數據

    const handlePageChange = (page) => {
        setCurrentPage(page);
        // 在跳轉頁面時，保留原來的 course_id 並更新 page
        const newUrl = courseId
            ? `/bbs/boards?course_id=${courseId}&page=${page}`
            : `/bbs/boards?page=${page}`;
        window.history.pushState({}, '', newUrl);  // 更新 URL 而不刷新頁面
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
