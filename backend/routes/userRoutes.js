const router = require("express").Router();
const userModel = require('../models/User');

router.route("")
    .get('/users', async (req, res) => {
    try {
        const users = await userModel.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).send('用戶未找到');
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/users', async (req, res) => {
    const { name } = req.body;
    try {
        const newUser = await userModel.createUser(name);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;