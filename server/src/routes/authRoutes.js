// sign up or sign in
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User'); // to manipulate the collection of data

const router = express.Router(); // an object that allow us to associate some numbers of route handlers with it

router.post('/signup', async (req, res) => { // when someone makes a post request to /signup
    // req.body = an object which has email and password properties
    const { email, password } = req.body;

    try {
        const user = new User({ email, password }); // create an instance of a use
        await user.save(); // save the created instance
        
        const token = jwt.sign({ userId: user._id}, 'abcdef');
        res.send({ token }); // this token will be included in any follow up request
    } catch(err) {
        res.status(422).send(err);
    }
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(422).send({ error: 'Must provide email and password' });
    }

    const user = await User.findOne({ email });
    if(!user) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, 'abcdef');
        res.send({ token })
    } catch(err) {
        return res.status(422).send({ error: 'Invalid password or email' })
    }
})

module.exports = router;