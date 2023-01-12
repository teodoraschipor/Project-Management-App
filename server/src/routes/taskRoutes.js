const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');
const Task = mongoose.model('Task');

const router = express.Router(); // an object that allow us to associate some numbers of route handlers with it

router.use(requireAuth); // all the different routes that we attach to this router inside this file will require the user to be signed in

router.get('/tasks', async (req, res) => {
    // we'll have to inspect the req object in order to see what user is making the request
    // req.user._id // from requireAuth where we put the user information in the request
    const tasks = await Task.find({ userId: req.user._id }); // if we don't find any => empty array

    res.send(tasks);
})

router.post('/tasks', async (req, res) => {
    const { name, locations } = req.body;

    if(!name || !locations) {
        return res.status(422).send({ error: 'You must provide a name and locations' });
    }

    try {
        const task = new Task({ name, locations, userId: req.user._id });
        await task.save();
        res.send(task); 
    } catch(err) {
        res.status(422).send({ error: err.message })
    }
});

module.exports = router;