const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Scheme and Model

const StudentSchema = new Schema({
    name: String,
    weight: Number
});

const Student = mongoose.model('student', StudentSchema);

module.exports = Student;

