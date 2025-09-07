const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName: {
            type: String,
            required: true,
            minlength: [ 3 , 'First name must be 3 characters or long']
        },
        lastName: {
            type: String,
            minlength: [ 3 , 'First name must be 3 characters or long']
        },
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [ 5, 'Email must be 5 characters or long']
    },
    password: {
        type: String,
        required: true,
        // unique: true
    },
    socketId: {
        tyre: String,
    }
})