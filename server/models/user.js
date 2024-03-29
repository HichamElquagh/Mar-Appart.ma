
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true 
    },
    image: {
        type: String,
        default: 'https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'
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