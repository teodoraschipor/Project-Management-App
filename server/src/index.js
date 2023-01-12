require('./models/User'); // we execute this file
require('./models/Task'); // we execute this file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // a library that will automatically parse information associated with the body property of incoming requests => we'll use it to handle the incoming JSON data
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(taskRoutes);

const mongoUri = 'mongodb+srv://teodoraschipor:parola@cluster0.tsdvhs3.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoUri); 

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo')
})

mongoose.connection.on('error', (err ) => {
    console.log('Error connecting to mongo', err)
})

app.get('/', requireAuth, (req, res) => {
    res.send(`You email: ${req.user.email}`);
}) // any time someone makes a get type http request to the root route of our app ('/'), we want to run this function 
// req = the hhtp request
// res = the outgoing response

app.listen(3000, () => {
    console.log('Listening on port 3000')
})