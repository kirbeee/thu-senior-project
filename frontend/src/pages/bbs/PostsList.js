import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; // Import PropTypes

const PostList = ({boardId}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const response = await axios
                    // eslint-disable-next-line no-undef
                    .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
                    .get(`/bbs/posts/`,{
                    params: {
                        board_id: boardId
                    }
                });
                setPosts(response.data.results);  // 假设返回的数据是 `results`
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, [boardId]);  // 当 boardId 或 page 改变时重新加载数据


    return (
        <div className="p-4">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {posts.map((post) => (
                        <p key={post.id}>{post.content}</p>
                    ))}
                </div>
            )}
        </div>
    );
};

PostList.propTypes = { // Add propTypes for PostList component
    boardId: PropTypes.number.isRequired, // boardId is expected to be a number and is required
};

export default PostList;