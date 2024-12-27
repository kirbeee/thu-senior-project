import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BoardDetail = () => {
    const { id } = useParams();  // 取得 URL 中的 board ID
    const [board, setBoard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/bbs/boards/${id}/`)
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
        </div>
    );
};

export default BoardDetail;
