import React from "react";
import Link from "next/link"; // Next.js 提供的路由跳轉組件

const BoardCard = ({ board }) => {
    return (
        <div className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2">
            <div className="card-body">
                <h3 className="card-title">{board.name}</h3>
                <p className="text-gray-700">{board.description}</p>
                <p className="text-gray-500">Course ID: {board.course_id}</p>
                <p className="text-gray-500">Category: {board.category || "Uncategorized"}</p>

                {/* 使用 Next.js 的 Link 進行跳轉 */}
                <Link href={`/bbs/boards/${board.id}`}>
                    <div className="mt-4 inline-block text-blue-500 hover:text-blue-700">
                        View Board
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BoardCard;
