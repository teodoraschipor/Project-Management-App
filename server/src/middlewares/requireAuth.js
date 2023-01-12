const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User'); // to manipulate the collection of data

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization) {
        return res.status(401).send({ error: 'You must be logged in' });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'abcdef', async (err, payload) => {

        if(err) {
            return res.status(401).send({ error: 'You must be logged in' });
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();
    })
};

// so inside this middleware, if we determine that the user has a web token, we call the above function => it's a signal that the request can move on to the next middleware inside of our chain of middlewares. if there's not a next middleware => run our ultimate request handler, which in our case will be the res.send(...) from app.get('/') in index.js file