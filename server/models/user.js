const mongoose = require('mongoose');

var User = mongoose.model('User', {
    username: {
        type: 'string',
        require: true
    }, 
    email: {
        type: 'string',
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};