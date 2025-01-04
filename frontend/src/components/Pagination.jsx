import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="join">
            <button
                onClick={handlePrev}
                disabled={currentPage === 1}
                className="join-item btn">
                {"<<"}
            </button>
            <span className="join-item btn btn-disabled">
                Page {currentPage} of {totalPages}
            </span>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="join-item btn">
                {">>"}
            </button>
        </div>
    );
};

export default Pagination;
