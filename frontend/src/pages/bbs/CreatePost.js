import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import Link from 'next/link'; // Import Link for navigation

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // const [userId, setUserId] = useState(""); // No longer needed to manually set user ID
    const [boardId, setBoardId] = useState(""); // Consider making this selectable or dynamic
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const { user } = useSelector(state => state.users); // Get user info from Redux state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (!user) { // Check if user is logged in before submitting
            setErrorMessage("You must be logged in to create a post.");
            return; // Stop submission if not logged in
        }

        try {
            const postData = {
                title,
                content,
                user_id: user.id, // Use logged-in user's ID from Redux state
                board_id: parseInt(boardId),
            };

            const response = await axios
                .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
                .post("/bbs/posts/", postData);
            console.log("Post created successfully:", response.data);
            setSuccessMessage("Post created successfully!");
            setTitle("");
            setContent("");
            setBoardId("");

        } catch (error) {
            console.error("Error creating post:", error);
            setErrorMessage("Error creating post. Please check the details and try again.");
        }
    };

    if (!user) { // Conditionally render login prompt if not logged in
        return (
            <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md text-center">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Create a New Post</h1>
                <p className="text-gray-700 mb-4">You need to be logged in to create a post.</p>
                <Link href="/auth/LoginPage" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-block">
                    Log In to Create Post
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create a New Post</h1>

            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline ml-2">{successMessage}</span>
                </div>
            )}

            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline ml-2">{errorMessage}</span>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter post title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        maxLength="255"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                        Content:
                    </label>
                    <textarea
                        id="content"
                        placeholder="Write your post content here"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-y"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    ></textarea>
                </div>
                {/* User ID input is now removed */}
                <div>
                    <label htmlFor="boardId" className="block text-gray-700 text-sm font-bold mb-2">
                        Course ID
                    </label>
                    <input
                        type="number"
                        id="boardId"
                        placeholder="Enter Board ID"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={boardId}
                        onChange={(e) => setBoardId(e.target.value)}
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost;