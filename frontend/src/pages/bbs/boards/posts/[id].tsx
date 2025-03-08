import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Comment from "@components/containers/Comment";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../../../../next-i18next.config';

const PostDetailPage = ({ post: initialPost }) => { // Receive post as prop
    const router = useRouter();
    const { id: postIdString } = router.query;
    const postId = Number(postIdString);
    const [post, setPost] = useState(initialPost || null); // Initialize with prop or null
    const [loading, setLoading] = useState(!initialPost); // Only loading if no initialPost
    const [error, setError] = useState(null);
    const { t } = useTranslation('postDetailPage');

    useEffect(() => {
        if (initialPost || !postId) return; // Don't refetch if initialPost exists or postId is missing

        setLoading(true);
        setError(null);
        axios
            .get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/posts/${postId}/`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching post:", error);
                setError(t('errorLoadingPost'));
                setLoading(false);
            });
    }, [postId, t, initialPost]); // initialPost in dependency array

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
                    <span>{t('postNotFound')}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-6">
                <Link href={`/bbs/boards/${post.board_id}`} className="btn btn-ghost">
                    {t('backToBoard')}
                </Link>
            </div>

            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold">{post.title}</h2>
                    <p className="text-gray-600 mb-4">
                        {t('postedBy')} <span className="font-semibold">{post.user_id}</span> {t('on')} {new Date(post.created_at).toLocaleDateString()}
                    </p>
                    <p>{post.content}</p>
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-4">
                            {t('tags')}:
                            <div className="flex flex-wrap gap-2 mt-2">
                                {post.tags.map(tag => (
                                    <span key={tag.id} className="badge badge-primary badge-outline">{tag.name}</span>
                                ))}
                            </div>
                        </div>
                    )}
                    <div className="card-actions justify-end mt-4">
                        {/* Action buttons can be added here if needed */}
                    </div>
                </div>
            </div>

            <section className="mt-8">
                <h3 className="text-2xl font-semibold mb-4">{t('comments')}</h3>
                <ul className="space-y-4">
                    {post.comments.map(comment => (
                        <li key={comment.id} className="bg-base-100 rounded-lg shadow-md p-4 border border-base-200">
                            <div className="font-semibold">{comment.user.username} {t('said')}:</div>
                            <p className="mt-1">{comment.content}</p>
                            <div className="text-sm text-gray-500 mt-2">
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

export const getStaticProps = async ({ locale, params }) => { // Add params
    const postId = params?.id;

    let postData = null;
    if (postId) {
        try {
            const response = await axios
                .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
                .get(`/bbs/posts/${postId}/`);
            postData = response.data;
        } catch (error) {
            console.error("Error fetching post data for getStaticProps:", error);
            // Handle error appropriately
        }
    }

    return {
        props: {
            post: postData, // Pass post data as prop
            ...(await serverSideTranslations(locale, ['postDetailPage', 'header', 'common'], i18nConfig)),
        },
        revalidate: 60, // Optional: Revalidate every 60 seconds
    };
};

export const getStaticPaths = async () => {
    try {
        const response = await axios
            .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
            .get('/bbs/posts/'); // Fetch all posts or a limited number
        const posts = response.data.results; // Assuming results are in 'results' array

        const paths = posts.map((post) => ({
            params: { id: String(post.id) }, // `id` should be a string
        }));

        return {
            paths,
            fallback: 'blocking', // Or 'fallback: false' or 'fallback: true'
        };
    } catch (error) {
        console.error("Error fetching posts for getStaticPaths:", error);
        return {
            paths: [],
            fallback: 'blocking', // or 'fallback: false'
        };
    }
};

export default PostDetailPage;