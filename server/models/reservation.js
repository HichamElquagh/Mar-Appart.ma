const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const reservationSchema = new Schema({
    apartment: {
        type: Schema.Types.ObjectId,
        ref: 'Apartment',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    checkIn: {
        type: Date,
        required: true
    },
    checkOut: {
        type: Date,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'pending'
    }

});