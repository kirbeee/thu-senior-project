import React, { useState } from "react";
import axios from "axios";

// Define status type to enforce type safety for status states
type Status = 'loading' | 'success' | 'error' | null;

interface CommentProps {
    postId: number;
    userId: number; // Consider if userId should be required or optional, adjust prop type accordingly
}

const Comment = ({ postId, userId }: CommentProps) => {
    const [commentContent, setCommentContent] = useState("");
    const [createCommentStatus, setCreateCommentStatus] = useState<Status>(null);
    const [deleteCommentStatus, setDeleteCommentStatus] = useState<Status>(null);
    const [commentToDeleteId, setCommentToDeleteId] = useState("");

    // Reusable function to clear status after a delay
    const clearStatus = (setStatus: (status: Status) => void) => {
        setTimeout(() => setStatus(null), 3000);
    };

    // Function to handle comment creation
    const handleCreateComment = async () => {
        setCreateCommentStatus('loading'); // Explicitly set type here
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/comments/`,
                {
                    content: commentContent,
                    post_id: postId,
                    user_id: userId, // Ensure userId is correctly being passed and is available
                }
            );
            if (response.status === 201) {
                setCreateCommentStatus('success'); // Explicitly set type here
                setCommentContent("");
            } else {
                setCreateCommentStatus('error'); // Explicitly set type here
            }
        } catch (error) {
            console.error("Error creating comment:", error);
            setCreateCommentStatus('error'); // Explicitly set type here
        } finally {
            clearStatus(setCreateCommentStatus);
        }
    };

    // Function to handle comment deletion
    const handleDeleteComment = async () => {
        setDeleteCommentStatus('loading'); // Explicitly set type here
        try {
            const response = await axios.delete(
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/comments/${commentToDeleteId}/`
            );
            if (response.status === 204) {
                setDeleteCommentStatus('success'); // Explicitly set type here
                setCommentToDeleteId("");
            } else {
                setDeleteCommentStatus('error'); // Explicitly set type here
            }
        } catch (error) {
            console.error("Error deleting comment:", error);
            setDeleteCommentStatus('error'); // Explicitly set type here
        } finally {
            clearStatus(setDeleteCommentStatus);
        }
    };

    // Reusable Status Message Component
    const StatusMessage = ({ status }: { status: Status }) => {
        if (status === 'success') {
            return <span className="text-green-500 ml-2">Success!</span>;
        }
        if (status === 'error') {
            return <span className="text-red-500 ml-2">Error. Please try again.</span>;
        }
        return null;
    };

    return (
        <div className="mb-8">
            <h4 className="text-xl font-semibold mb-4">Comment Actions</h4>

            {/* Create Comment Section - Extracted to Component for clarity*/}
            <CommentSection title="Add New Comment" status={createCommentStatus} onCommentChange={setCommentContent} commentContent={commentContent} onButtonClick={handleCreateComment} buttonText="Add Comment" />

            {/* Delete Comment Section - You can similarly extract this section if needed for more actions*/}
            {/* Example of Delete Comment Section would go here if you want to include it based on original code*/}

        </div>
    );
};

// Extracted Comment Section Component for reusability and cleaner structure
const CommentSection = ({ title, status, commentContent, onCommentChange, onButtonClick, buttonText }: {
    title: string;
    status: Status;
    commentContent: string;
    onCommentChange: (value: string) => void;
    onButtonClick: () => void;
    buttonText: string;
}) => (
    <div className="mb-6 p-4 border rounded-lg bg-base-100 shadow-md">
        <h5 className="font-semibold mb-2">{title}</h5>
        <textarea
            placeholder="Write your comment here..."
            className="textarea textarea-bordered w-full mb-2"
            value={commentContent}
            onChange={(e) => onCommentChange(e.target.value)}
        />
        <button
            className={`btn btn-primary btn-sm ${status === 'loading' ? 'loading' : ''}`}
            onClick={onButtonClick}
            disabled={status === 'loading'}
        >
            {buttonText}
        </button>
        <StatusMessage status={status} /> {/* Reusable status message component */}
    </div>
);


// Reusable Status Message Component (Moved outside for broader use if needed and better structure)
const StatusMessage = ({ status }: { status: Status }) => { // Re-declared outside, ensure no naming conflicts if used in same file.
    if (status === 'success') {
        return <span className="text-green-500 ml-2">Success!</span>;
    }
    if (status === 'error') {
        return <span className="text-red-500 ml-2">Error. Please try again.</span>;
    }
    return null;
};


export default Comment;