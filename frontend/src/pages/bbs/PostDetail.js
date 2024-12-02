import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function PostDetail() {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(`/bbs/posts/${id}/`)
            .then(response => setPost(response.data))
            .catch(error => console.error(error));
    }, [id]);

    return (
        <div>
            {post ? (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default PostDetail;