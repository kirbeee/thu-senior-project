import React from "react";
import Link from "next/link";
import PropTypes from 'prop-types';

const BoardCard = ({ board }) => {
    return (
        <div className="card min-w-[250px] max-w-sm w-full bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow transition-transform hover:scale-105 m-2">
            <div className="card-body">
                <h3 className="card-title text-brown-800">{board.name}</h3>
                <p className="text-brown-700">{board.description}</p>
                <p className="text-gray-500">Course ID: {board.course_id}</p>
                <Link href={`/bbs/Board/${board.id}`}>
                    <div className="mt-4 inline-block text-amber-500 hover:text-amber-700">
                        View Post
                    </div>
                </Link>
            </div>
        </div>
    );
};

BoardCard.propTypes = {
    board: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        course_id: PropTypes.number.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string,
        }),
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default BoardCard;