const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema(
    {
        "userid": Number,
        "emai" : String,
        "firstName" : String,
        "lastName" : String,
        "userName" : String,
        "contact" : String,
        "password" : String,
        "role" : String,
        "isLoggedIn" : Boolean,
        "uuid" : String,
        "accesstoken" : String,
        "coupens" : Array,
        "bookingRequests" : Array,
    },
    {
        timestamps: true
    }
);

const Users = mongoose.model("User", userSchema);
module.exports = Users;