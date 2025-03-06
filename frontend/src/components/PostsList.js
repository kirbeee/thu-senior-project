import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';
import Link from "next/link";

const PostList = ({ boardId }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            setLoading(true);
            try {
                const response = await axios
                    .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
                    .get(`/bbs/posts/`, {
                        params: {
                            board_id: boardId
                        }
                    });

                if (response.data && response.data.results) {
                    setPosts(response.data.results.map(post => ({
                        ...post,
                        title: post.title || '無標題',
                        author: post.user?.username || '匿名用戶', // 使用 user.username
                        created_at: post.created_at || new Date(),
                        upvotes: post.post_likes_count || 0, // 使用 post_likes_count
                        comment_count: post.comments?.length || 0, // 使用 comments.length
                        // board_name: post.board_name || '版塊名稱' // board_name 看起來不在 API 回應中
                    })));
                } else {
                    console.error("API response data 或 results 屬性不存在");
                    setPosts([]);
                }


            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, [boardId]);

    const formatTime = (date) => {
        try {
            return formatDistanceToNow(new Date(date), {
                locale: enUS,
                addSuffix: true,
            });
        } catch (error) {
            console.error("Error formatting date:", error);
            return '時間錯誤';
        }
    };


    return (
        <div className="p-4">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li key={post.id} className="bg-base-100 rounded-lg shadow-md border border-base-200">
                            <article className="card-body p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <Link href={`/bbs/posts/${post.id}`} passHref> {/* 使用 Link 包覆 h2 */}
                                            <h2 className="card-title text-lg font-semibold hover:underline cursor-pointer">
                                                {post.title}
                                            </h2>
                                        </Link>
                                    </div>
                                    {/* 版塊名稱 badge 先移除，因為 API 回應中沒有版塊名稱 */}
                                    {/* <div className="badge badge-secondary badge-sm">{post.board_name}</div> */}
                                </div>
                                <p>{post.content}</p>
                                <div className="card-actions justify-between items-center mt-4">
                                    <div className="flex items-center text-sm text-gray-500">
                                        <span>{`由 ${post.author} 發布`}</span>
                                        <span className="ml-2">•</span>
                                        <span className="ml-2">{formatTime(post.created_at)}</span>
                                    </div>
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button className="btn btn-ghost btn-sm flex items-center space-x-2">
                                            <FaArrowUp className="h-4 w-4" />
                                            <span>{post.upvotes}</span>
                                        </button>
                                        <button className="btn btn-ghost btn-sm flex items-center space-x-2">
                                            <FaArrowDown className="h-4 w-4" />
                                        </button>
                                        <button className="btn btn-ghost btn-sm flex items-center space-x-2">
                                            <FaComment className="h-4 w-4" />
                                            <span>{post.comment_count} 評論</span>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

PostList.propTypes = {
    boardId: PropTypes.number.isRequired,
};

export default PostList;