const db = require('../models');
const User = db.User;

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch users' });
    }
};

exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).send({ error: 'Failed to create user' });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).send({ error: 'Failed to fetch user' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).send({ error: 'Failed to update user' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        await user.destroy();
        res.send({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).send({ error: 'Failed to delete user' });
    }
};