const express = require('express'),
    router = express.Router(),
    passport = require('passport'),
    jwt = require('jsonwebtoken');

const Hotel = require('../models/hotel'),
    config = require('../config/database');

// Route handler for /hotels/add
router.post('/add', (req, res, next) => {
    let newHotel = new Hotel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        rating: req.body.rating,
        description: req.body.description,
        address: req.body.address,
        location: req.body.location,
        room: req.body.room
    });
    Hotel.addHotel(newHotel, (err, hotel) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to be added hotel' });
        } else {
            res.json({ success: true, msg: "Hotel is added!" });
        }
    });
});

// Route handler for /hotels/place
router.get('/:place', (req, res, next) => {
    let place = req.params.place;
    Hotel.getHotelsByAddress(place, (err, hotel) => {
        if (err) {
            res.json({ success: false, msg: 'Oops! No hotel found in this location!' });
        } else {
            res.json(hotel);
        }
    });
});

module.exports = router;
