const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    name: {
        type: String,
        default: '',
    },
    assignee: {
        type: String,
        default: '',
        required: true,
    },
    details: {
        type: String,
        default: '',
        required: true,
    }
})

mongoose.model('Task', taskSchema); // we are loading up trackSchema only, because pointSchema is embedded in trackSchema