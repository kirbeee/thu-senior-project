import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types'; // While PropTypes are less common in TS, they are kept as in original code
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import { FaArrowUp, FaArrowDown, FaComment } from 'react-icons/fa';
import Link from "next/link";

// Define the interface for a Post object to ensure type safety
interface Post {
    id: number;
    title: string;
    content: string;
    author: string; // User's username
    created_at: string; // or Date if you want to parse it as Date object
    upvotes: number;
    comment_count: number;
    // board_name?: string; // board_name is commented out as it's not in API response (as per original code comment)
}

interface PostListProps {
    boardId: number;
}

const PostList: React.FC<PostListProps> = ({ boardId }) => {
    // Explicitly type 'posts' state as Post array
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

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
                    // Map the API response to ensure each post conforms to the Post interface
                    const formattedPosts: Post[] = response.data.results.map((post: any) => ({
                        id: post.id, // Ensure 'id' is present and correctly mapped
                        title: post.title || '無標題',
                        content: post.content || '', // Add default for content as well if needed
                        author: post.user?.username || '匿名用戶',
                        created_at: post.created_at || new Date().toISOString(), // Ensure created_at is string (or handle Date object consistently)
                        upvotes: post.post_likes_count || 0,
                        comment_count: post.comments?.length || 0,
                        // board_name: post.board_name // Removed as per original comment
                    }));
                    setPosts(formattedPosts);
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

    // Extracted time formatting logic into a separate function
    const formatTime = (date: string): string => {
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

    // Extracted Post Item rendering into a separate component for better readability and reusability
    const PostItem = ({ post, formatTime }: { post: Post, formatTime: (date: string) => string }) => (
        <li key={post.id} className="bg-base-100 rounded-lg shadow-md border border-base-200">
            <article className="card-body p-4">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <Link href={`/bbs/boards/posts/${post.id}`} passHref>
                            <h2 className="card-title text-lg font-semibold hover:underline cursor-pointer">
                                {post.title}
                            </h2>
                        </Link>
                    </div>
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
    );


    return (
        <div className="p-4">
            {loading ? (
                <p className="text-center">Loading...</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} formatTime={formatTime} />
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