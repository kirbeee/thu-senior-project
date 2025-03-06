import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Comment from "../../../components/Comment"; // Import Link if not already imported

const PostDetailPage = () => {
    const router = useRouter();
    const { id: postIdString } = router.query;
    const postId = Number(postIdString);
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!postId) return; // Don't fetch if postId is not yet available

        setLoading(true);
        setError(null); // Clear any previous errors
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/posts/${postId}/`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching post:", error);
                setError("Failed to load post details.");
                setLoading(false);
            });
    }, [postId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="alert alert-warning">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000000" className="stroke-current shrink-0 h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <span>Post not found.</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Link href={`/bbs/Board/${post.board_id}`} className="btn btn-ghost">
                    Back to Board
                </Link>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{post.title}</h2>
                    <p className="text-gray-600 mb-4">
                        Posted by <span className="font-semibold">{post.user_id}</span> on {new Date(post.created_at).toLocaleDateString()}
                    </p>
                    <p>{post.content}</p>
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-4">
                            Tags:
                            <div className="flex flex-wrap gap-2 mt-2">
                                {post.tags.map(tag => (
                                    <span key={tag.id} className="badge badge-primary badge-outline">{tag.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="card-actions justify-end mt-4">
                        {/* Add any action buttons here, like Edit, Delete (if applicable) */}
                    </div>
                </div>
            </div>

            <section className="mt-8">
                    <h3 className="text-2xl font-semibold mb-4">Comments</h3>
                    <ul className="space-y-4"> {/* 使用 ul 建立評論列表, space-y-4 設定垂直間距 */}
                        {post.comments.map(comment => (
                            <li key={comment.id} className="bg-base-100 rounded-lg shadow-md p-4 border border-base-200"> {/*  每個評論用 li 包裹，加上樣式 */}
                                <div className="font-semibold">{comment.user.username} said:</div> {/* 顯示留言者使用者名稱 */}
                                <p className="mt-1">{comment.content}</p> {/* 顯示評論內容 */}
                                <div className="text-sm text-gray-500 mt-2"> {/* 顯示評論建立時間 */}
                                    {new Date(comment.created_at).toLocaleDateString()}
                                </div>
                            </li>
                        ))}
                    </ul>
            </section>

            <section className="mt-8">
                 <Comment postId={postId} userId={1} />
             </section>
        </div>
    );
};

export default PostDetailPage;