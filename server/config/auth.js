const host = require("./host");

module.exports = {

    'facebookAuth': {
        'clientID': '1964292910503901',
        'clientSecret': '27941a9ab6c49cf1b45ec43bfad2f120',
        'callbackURL': host.serverHost + 'users/auth/facebook/callback',
    },

    'googleAuth': {
        'clientID': '203711264523-vu1mdt2sh5c5r2dqm3apidj8ql5eci1a.apps.googleusercontent.com',
        'clientSecret': 'r7OYBUkjFf4SsFc1tEwQ1LxS',
        'callbackURL': host.serverHost + 'users/auth/google/callback',
    },

    'githubAuth': {
        'clientID': 'ba00dda04b21f1d0922f',
        'clientSecret': 'd08724e495f17d2907b7b4ee3b2bc7524bb42eee',
        'callbackURL': host.serverHost + 'users/auth/github/callback',
    },
};