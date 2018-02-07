const express = require("express"),
    path = require("path"),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require("passport"),
    mongoose = require('mongoose'),
    config = require('./config/database'),
    configPassport = require('./config/passport');

mongoose.connect(config.database);

// Connect To Database
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

// On Error
mongoose.connection.on('error', (error) => {
    console.log('Database error: ' +error);
});
const app = express();

const users = require('./routes/users');
const hotels = require('./routes/hotels');

//Port Number
const PORT = process.env.PORT || 8080 ;

// CORS Middleware
app.use(cors())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
configPassport(passport);

// Route for /users
app.use('/users', users);

//Route for /hotels
app.use('/hotels', hotels);

// Index Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/index.html'));
});

// // Handle request for every route
// app.get('*', (req, res, next) => {
//     res.sendFile(path.join(__dirname, 'client/index.html'));
// });

// Start Server
app.listen(PORT, () => { console.log('Server is running on ' + PORT); });
