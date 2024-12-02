import { useState } from 'react';
import axios from "axios";

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = () => {
        axios.post('/bbs/posts/', { title, content })
            .then(response => console.log('Post created:', response.data))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h1>Create Post</h1>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div>
                    <label>Title:</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;