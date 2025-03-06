import React, { useState } from "react";
import axios from "axios";

const Comment = ({ postId, userId }) => {
    const [commentContent, setCommentContent] = useState("");
    const [createCommentStatus, setCreateCommentStatus] = useState(null); // 'success', 'error', null
    const [deleteCommentStatus, setDeleteCommentStatus] = useState(null); // 'success', 'error', null
    const [commentToDeleteId, setCommentToDeleteId] = useState(""); // For controlled delete input

    const handleCreateComment = async () => {
        setCreateCommentStatus('loading');
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/comments/`,
                {
                    content: commentContent,
                    post_id: postId,
                    user_id: userId, // Assuming userId is passed as prop or available
                }
            );
            if (response.status === 201) {
                setCreateCommentStatus('success');
                setCommentContent(""); // Clear input after successful comment
                // Optionally, you could fetch and update comment list here if you were displaying comments
            } else {
                setCreateCommentStatus('error');
            }
        } catch (error) {
            console.error("Error creating comment:", error);
            setCreateCommentStatus('error');
        } finally {
            setTimeout(() => setCreateCommentStatus(null), 3000); // Clear status message after 3 seconds
        }
    };

    const handleDeleteComment = async () => {
        setDeleteCommentStatus('loading');
        try {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/comments/${commentToDeleteId}/`
            );
            if (response.status === 204) {
                setDeleteCommentStatus('success');
                setCommentToDeleteId(""); // Clear delete input
                // Optionally, you could refresh comment list here if you were displaying comments
            } else {
                setDeleteCommentStatus('error');
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
            setDeleteCommentStatus('error');
        } finally {
            setTimeout(() => setDeleteCommentStatus(null), 3000); // Clear status message after 3 seconds
        }
    };

    return (
        <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Comment Actions</h4>

            {/* Create Comment Section */}
            <div className="mb-6 p-4 border rounded-lg bg-base-100 shadow-md">
                <h5 className="font-semibold mb-2">Add New Comment</h5>
                <textarea
                    placeholder="Write your comment here..."
                    className="textarea textarea-bordered w-full mb-2"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                />
                <button className={`btn btn-primary btn-sm ${createCommentStatus === 'loading' ? 'loading' : ''}`} onClick={handleCreateComment} disabled={createCommentStatus === 'loading'}>
                    Add Comment
                </button>

                {createCommentStatus === 'success' && (
                    <span className="text-green-500 ml-2">Comment added successfully!</span>
                )}
                {createCommentStatus === 'error' && (
                    <span className="text-red-500 ml-2">Error adding comment. Please try again.</span>
                )}
            </div>

            {/* Delete Comment Section */}
            <div className="p-4 border rounded-lg bg-base-100 shadow-md">
                <h5 className="font-semibold mb-2">Delete Comment (by ID)</h5>
                <div className="flex items-center mb-2">
                    <input
                        type="text"
                        placeholder="Enter comment ID to delete"
                        className="input input-bordered input-sm w-full max-w-xs mr-2"
                        value={commentToDeleteId}
                        onChange={(e) => setCommentToDeleteId(e.target.value)}
                    />
                    <button
                        className={`btn btn-error btn-sm ${deleteCommentStatus === 'loading' ? 'loading' : ''}`}
                        onClick={handleDeleteComment}
                        disabled={deleteCommentStatus === 'loading'}
                    >
                        Delete Comment
                    </button>
                </div>
                {deleteCommentStatus === 'success' && (
                    <span className="text-green-500 ml-2">Comment deleted successfully!</span>
                )}
                {deleteCommentStatus === 'error' && (
                    <span className="text-red-500 ml-2">Error deleting comment. Please check ID and try again.</span>
                )}
            </div>
        </div>
    );
};

export default Comment;