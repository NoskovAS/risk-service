const mongoose = require("mongoose");
const config = require("../config/database");

// Risk Schema
const RiskSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    riskname: {
        type: String,
        required: true
    },
    priority: {
        type: Number,
        required: true
    },
    hoursinfluence: {
        type: Number,
        required: true
    },
    costinfluence: {
        type: Number,
        required: true
    },
    commonChance: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    suggestions: {
        type: String
            /* required: true */
    },
    index: {
        type: Number,
        required: true
    }
});

// Creating a model
const Risk = (module.exports = mongoose.model("Risk", RiskSchema));

module.exports.getRiskById = function(id, callback) {
    Risk.findById(id, callback);
};

module.exports.getRisksbyUsername = function(username, callback) {
    const query = {
        username: username
    };
    Risk.find(query, callback);
};

module.exports.getRiskbyNum = function(num, callback) {
    const query = {
        num: num
    };
    Risk.find(query, callback);
};

module.exports.addRisk = function(newRisk, callback) {
    newRisk.save(callback);
};