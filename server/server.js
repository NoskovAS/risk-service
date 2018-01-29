const express = require("express");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const https = require("https");
const passport = require("passport");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const config = require("./config/database");
const routes = require('./config/route-config');
const morgan = require('morgan');
const host = require('./config/host');


/* const HTTP_PORT = 8080, HTTPS_PORT = 8443 */
const HTTP_PORT = process.env.PORT || 8080;
const HTTPS_PORT = process.env.PORT || 8443;

/* Https configs */
var sslOptions = {
    key: fs.readFileSync('ssl/ca-key.pem', 'utf8'),
    cert: fs.readFileSync('ssl/ca-crt.pem', 'utf8'),
    passphrase: host.ssl_password,
    requestCert: false,
    rejectUnauthorized: false
};

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

// CORS Middleware
app.use(cors());

// Morgan logger
app.use(morgan('tiny'));
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }));

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
/* app.get("/", (req, res) => {
    res.send("Invalid Endpoint");
}); */

// Run the app by serving the static files
// in the dist directory 
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

/* Create https server */
https.createServer(sslOptions, app).listen(HTTPS_PORT, function() {
    console.log('Express HTTPS server listening on port ' + HTTPS_PORT);
});

// Start HTTP Server
/* app.listen(HTTP_PORT, () => {
    console.log("Server started on HTTP_PORT " + HTTP_PORT);
}); */