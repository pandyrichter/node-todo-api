const mongoose = require('mongoose');

var Todo = mongoose.model('TodoApp', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false,
        minlength: 1,
        trim: true
    },
    completedAt: {
        type: Number,
        default: null,   
    }
});

module.exports = {Todo};