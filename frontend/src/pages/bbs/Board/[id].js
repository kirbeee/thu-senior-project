import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import PostList from "../PostsList"; // Assuming PostList component is in the same directory or correctly pathed

const Id = () => {
    const router = useRouter();
    const { id: idString } = router.query; // Rename id to idString to avoid confusion
    const id = Number(idString); // Convert id string to number
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("router.query in Id Component:", router.query);
        console.log("id from router.query in Id Component:", id);
        setLoading(true); // Set loading to true before fetching
        axios
            // eslint-disable-next-line no-undef
            .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
            .get(`/bbs/boards/${id}/`)
            .then(response => {
                setBoard(response.data);
                console.log("Fetched board object:", response.data); // Keep this line for debugging
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the board details!", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p className="text-center py-4">Loading board information...</p>;
    }

    if (!board) {
        return <p className="text-center py-4 text-red-500">Error loading board information.</p>; // Handle case where board is null (e.g., API error after loading)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Board Header Section (Similar to Reddit board header) */}
            <header className="mb-6 p-4 bg-base-200 rounded-lg shadow">
                <h2 className="text-2xl font-bold text-primary mb-2">{board.name}</h2>
                <p className="text-gray-600">{board.description}</p>
                <div className="mt-2 flex space-x-4 text-sm text-gray-500">
                    <p>Category: <span className="font-semibold">{board.category?.name || 'N/A'}</span></p> {/* Updated line */}
                    <p>Course ID: <span className="font-semibold">{board.course_id || 'N/A'}</span></p>
                </div>
            </header>

            {/* Post List Section (Main content area, like Reddit post listings) */}
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Posts in <span className="font-bold">{board.name}</span></h3>
                <PostList boardId={id} /> {/* Pass the numeric id here */}
            </section>
        </div>
    );
};

export default Id;