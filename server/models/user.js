
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true 
    },
    role : { 
        type: String,
        required: true,
        enum: ['user', 'admin'],
        default: 'user'
     },
     phone : {
            type: String,
            required: true,
            unique: true
     },
     email : {
        type: String,
        required: true
     },
    password: {
        type: String,
        required: true
     }
    });



    module.exports =  mongoose.model('User', userSchema);