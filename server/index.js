const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("hello world");
});

const PORT = 4000
app.listen(PORT,()=>{
    console.log(`Server listening at http://localhost:${PORT}`);
})