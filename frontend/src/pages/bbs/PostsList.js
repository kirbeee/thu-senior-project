import { useEffect, useState } from "react";
import axios from "axios";

function PostsList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('/bbs/posts/')
            .then(response => setPosts(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;