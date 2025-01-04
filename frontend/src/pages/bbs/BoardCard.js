import React from "react";
import { Link } from "react-router-dom";  // 用來處理跳轉到每個討論板的頁面

const BoardCard = ({ board }) => {
    return (
        <div className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2">
            <div className="card-body">
                <h3 className="card-title">{board.name}</h3>
                <p className="text-gray-700">{board.description}</p>
                <p className="text-gray-500">Course ID: {board.course_id}</p>
                <p className="text-gray-500">Category: {board.category || "Uncategorized"}</p>

                {/* 當點擊時，跳轉到該討論板的詳細頁面 */}
                <Link to={`/bbs/boards/${board.id}`} className="mt-4 inline-block text-blue-500 hover:text-blue-700">
                    View Board
                </Link>
            </div>
        </div>
    );
};

export default BoardCard;
