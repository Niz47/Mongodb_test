const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme and Model

const UserSchema = new Schema({
    name: String,
    weight: Number
});

const User = mongoose.model('user', UserSchema);

module.exports = User;

