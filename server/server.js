const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
/* const http = require("http"); */
mongoose.Promise = global.Promise;
const config = require("./config/database");
const routes = require('./config/route-config');
const morgan = require('morgan');


/* const HTTP_PORT = 3000; 8080 */
const HTTP_PORT = process.env.PORT || 8080;

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Connect To Database
mongoose.connect(config.database, {
    useMongoClient: true
});

// On Connection
mongoose.connection.on("connected", () => {
    console.log("Connected to database " + config.database);
});

// On Error
mongoose.connection.on("error", err => {
    console.log("Database error: " + err);
});

const app = express();

const allowedOrigins = [
    'http://localhost:8080',
    'http://localhost:8080/users/auth/facebook/callback',
    'http://localhost:8080/users/auth/facebook/',
    'http://localhost:4200',
    'http://localhost:4200/login',
    'https://www.facebook.com/dialog/oauth?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fusers%2Fauth%2Ffacebook%2Fcallback&scope=email&client_id=1964292910503901'
];
// CORS Middleware
app.use(cors({

    origin: function(origin, callback) {

        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false); //false
        }

        return callback(null, true);
    },

    credentials: true,
}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if ('OPTIONS' == req.method) {
        res.send(200);
    } else {
        next();
    }
};


// Morgan logger
app.use(morgan('tiny'));
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

require("./config/passport")(passport);

app.use("/", routes);

// Index Route
app.get("/", (req, res) => {
    res.send("Invalid Endpoint");
});

// Start Server
app.listen(HTTP_PORT, () => {
    console.log("Server started on HTTP_PORT " + HTTP_PORT);
});