import React from "react";
import Link from "next/link"; // Next.js 提供的路由跳轉組件
import PropTypes from 'prop-types'; // Import PropTypes

const BoardCard = ({ board }) => { // Destructure board prop in function argument
    return (
        <div className="card min-w-[250px] max-w-sm w-full bg-base-100 shadow-md hover:shadow-lg transition-shadow m-2">
            <div className="card-body">
                <h3 className="card-title">{board.name}</h3>
                <p className="text-gray-700">{board.description}</p>
                <p className="text-gray-500">Course ID: {board.course_id}</p>
                <p className="text-gray-500">Category: {board.category || "Uncategorized"}</p>
                <Link href={`/bbs/boards/${board.id}`}>
                    <div className="mt-4 inline-block text-blue-500 hover:text-blue-700">
                        View Board
                    </div>
                </Link>
            </div>
        </div>
    );
};

BoardCard.propTypes = { // Define prop types for BoardCard
    board: PropTypes.shape({ // board prop should be an object with specific shape
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course_id: PropTypes.number.isRequired, // Assuming course_id is a number, adjust if needed
        category: PropTypes.string, // category is optional, so not isRequired
        id: PropTypes.number.isRequired, // Assuming id is a number, adjust if needed
    }).isRequired,
};

export default BoardCard;