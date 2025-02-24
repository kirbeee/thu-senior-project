import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PostList from "../../../components/PostsList"; // Ensure the path is correct
import Link from "next/link"; // Import Link from next/link

const Id = () => {
    const router = useRouter();
    const { id: idString } = router.query;
    const id = Number(idString);
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);

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
                    <span>Board not found.</span>
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
                    <div className="badge badge-outline">Category: {board.category?.name || 'N/A'}</div>
                    {board.course_id && ( // Conditional rendering to prevent errors if course_id is null
                        <Link href={`/courses/${board.course_id}`} passHref>
                            <div className="badge badge-outline cursor-pointer">Course ID: {board.course_id}</div>
                        </Link>
                    )}
                </div>
            </header>

            {/* Post List Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-semibold text-gray-800">Posts in <span className="font-bold text-primary">{board.name}</span></h3>
                    {/* Add a button here if you want to create a new post */}
                </div>
                <PostList boardId={id} />
            </section>
        </div>
    );
};

export default Id;