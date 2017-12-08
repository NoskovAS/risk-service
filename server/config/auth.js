const host = require("./host");

module.exports = {

    'facebookAuth': {
        'clientID': '1964292910503901',
        'clientSecret': '27941a9ab6c49cf1b45ec43bfad2f120',
        'callbackURL': host.serverHost + 'users/auth/facebook/callback',
    },

    'googleAuth': {
        'clientID': '203711264523-p1kk7ln9uncm61cnmd1du0ujedgkh776.apps.googleusercontent.com',
        'clientSecret': ' RT3n6xZuPKT0DiTCOnHQxY0x ',
        'callbackURL': host.serverHost + 'users/auth/google/callback',
    },

    'githubAuth': {
        'clientID': 'ba00dda04b21f1d0922f',
        'clientSecret': ' d08724e495f17d2907b7b4ee3b2bc7524bb42eee ',
        'callbackURL': host.serverHost + 'users/auth/github/callback',
    },
};