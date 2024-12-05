import { useEffect, useState } from 'react';
import axios from 'axios';

function BoardsList() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
        axios.get('/bbs/boards/')
            .then(response => setBoards(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Boards</h1>
            <ul>
                {boards.map(board => (
                    <li key={board.id}>{board.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BoardsList;