import { useState } from "react";
import axios from "axios";

function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState(""); // 預設值可從用戶上下文獲取
    const [boardId, setBoardId] = useState(""); // 預設值或動態選擇

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const postData = {
                title,
                content,
                user_id: parseInt(userId),
                board_id: parseInt(boardId),
            };

            const response = await axios.post("/bbs/posts/", postData);
            console.log("Post created successfully:", response.data);
            // 你可以在這裡重定向或顯示成功訊息
        } catch (error) {
            console.error("Error creating post:", error);
        }
    };

    return (
        <div>
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div>
                    <label className="input input-bordered flex items-center gap-2">
                        Title:
                        <input
                            className="grow"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            maxLength="255"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Content:
                        <textarea
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        User ID:
                        <input
                            type="number"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Board ID:
                        <input
                            type="number"
                            value={boardId}
                            onChange={(e) => setBoardId(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
}

export default CreatePost;
