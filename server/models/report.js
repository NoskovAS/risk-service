const mongoose = require("mongoose");
const config = require("../config/database");

const ReportSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

// Creating a model
const Report = (module.exports = mongoose.model('Report', ReportSchema));