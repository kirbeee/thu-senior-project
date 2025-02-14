import React, { useEffect, useState } from "react";
import {useRouter} from "next/router";
import axios from "axios";
import PostList from "../PostsList";

const Id = () => {
    const router = useRouter();
    const { id } = router.query;  // 取得 URL 中的 board ID
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            // eslint-disable-next-line no-undef
            .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
            .get(`/bbs/boards/${id}/`)
            .then(response => {
                setBoard(response.data);  // 假設返回的資料就是這個板塊的信息
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the board details!", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{board.name}</h2>
            <p>{board.description}</p>
            <p>Course ID: {board.course_id}</p>
            <p>Category: {board.category}</p>
            <PostList  boardId={id}/>
        </div>

    );
};

export default Id;
