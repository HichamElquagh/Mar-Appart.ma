
const mongoose = require('mongoose');
const { Schema } = mongoose;

const apartmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    city: { 
        type: String,
        required: true
      },
    address: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    numberOfPersons: {
        type: Number,
        required: true
      },
    space: { 
        type: Number,
        required: true
      },
    characteristics: { // Assuming this refers to various apartment features
        type: [String],
        required: false // Can be optional if characteristics are not always available
      },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

module.exports =  mongoose.model('Apartment', apartmentSchema);