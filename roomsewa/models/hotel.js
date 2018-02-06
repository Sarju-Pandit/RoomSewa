const mongoose = require('mongoose'),
    config = require('../config/database');

// Hotel Schema
const HotelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        street: { type: String},
        city: {type: String},
        state: {type: String},
        country: {type: String}
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String
    },
    rating: {
        type: Number,
        require: true
    },
    checkIn: {
        type: Date,
        default: Date.now,
        required: true
    },
    checkOut: {
        type: Date,
        default: Date.now,
        required: true
    },
    location: {
        lat: {
            type: Number,
            required: true
        },
        lon: {
            type: Number,
            require: true
        }
    },
    description: {
        type: String,
        required: true
    },
    room : [{
        roomType: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        floor: {
            type: String
        },
        features: [
            {type: String}
        ]
    }],
});

// Hotel Model
const Hotel = module.exports = mongoose.model('Hotel', HotelSchema);

//Method to find list of hotels based on Address
module.exports.getHotelsByAddress = function(place, callback){
    const query = {'address.city' : place};
    Hotel.find(query, callback).all;
};
 
// Method to add hotel
module.exports.addHotel = function(newHotel, callback){
    let id = newHotel.
    newHotel.save(callback);
};
