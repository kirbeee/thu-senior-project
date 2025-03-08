import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PostList from "@components/containers/PostsList";
import Link from "next/link";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../../../next-i18next.config';

const Id = () => {
    const router = useRouter();
    const { id: idString } = router.query;
    const id = Number(idString);
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation('boardIdPage');

    useEffect(() => {
        setLoading(true);
        axios
            .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
            .get(`/bbs/boards/${id}/`)
            .then(response => {
                setBoard(response.data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!board) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{t('boardNotFound')}</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Board Header Section */}
            <header className="mb-8 p-6 bg-base-100 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-2xl">
                <div className="flex items-center mb-4">
                    <div className="flex-shrink-0">
                        <div className="avatar placeholder">
                            <div className="bg-primary text-primary-content rounded-full w-14">
                                <span className="text-3xl font-semibold">{board.name.charAt(0).toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <h2 className="text-4xl font-extrabold text-gray-900">{board.name}</h2>
                        <p className="text-lg text-gray-600 mt-1">{board.description}</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="badge badge-outline">{t('category')}: {board.category?.name || 'N/A'}</div>
                    {board.course_id && (
                        <Link href={`/courses/${board.course_id}`} passHref>
                            <div className="badge badge-outline cursor-pointer">{t('courseId')}: {board.course_id}</div>
                        </Link>
                    )}
                </div>
            </header>

            {/* Post List Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-semibold text-gray-800">{t('postsIn')} <span className="font-bold text-primary">{board.name}</span></h3>
                    <div> {/* 新增按鈕容器 */}
                        <Link href={`/bbs/boards/posts/new`} passHref>
                            <button className="btn btn-primary">{t('createNewPost')}</button>
                        </Link>
                    </div>
                </div>
                <PostList boardId={id} />
            </section>
        </div>
    );
};

export const getStaticProps = async ({ locale, params }) => { // Add params here
    const boardId = params?.id; // Access the `id` from params

    let boardData = null;
    if (boardId) {
        try {
            const response = await axios
                .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
                .get(`/bbs/boards/${boardId}/`);
            boardData = response.data;
        } catch (error) {
            console.error("Error fetching board data for getStaticProps:", error);
            // Handle error appropriately, maybe return a default board or null
        }
    }


    return {
        props: {
            board: boardData, // Pass board data as props
            ...(await serverSideTranslations(locale, ['boardIdPage', 'header', 'common'], i18nConfig)),
        },
        revalidate: 60, // Optional: Revalidate every 60 seconds
    };
};

export const getStaticPaths = async () => {
    try {
        const response = await axios
            .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
            .get('/bbs/boards/'); // Fetch all boards or a limited number for pre-rendering
        const boards = response.data.results; // Assuming your API returns results in a 'results' array

        const paths = boards.map((board) => ({
            params: { id: String(board.id) }, // `id` should be a string
        }));

        return {
            paths,
            fallback: 'blocking', // or 'fallback: false' or 'fallback: true' - choose based on your needs
        };
    } catch (error) {
        console.error("Error fetching boards for getStaticPaths:", error);
        return {
            paths: [],
            fallback: 'blocking', // or 'fallback: false'
        };
    }
};


export default Id;