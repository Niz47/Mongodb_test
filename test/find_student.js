const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Finding student record', function(){

    var student;

    beforeEach(function(done){
        student = new Student({
            name: "Shaun"
        });
        student.save().then(function(){
            done();
        });
    });

    // Create test 1
    it('Find record from the database', function(done){
        Student.findOne({name: 'Shaun'}).then(function(result){
            assert(result.name === 'Shaun');
            done();
        });
    });

    // Create test 2
    it('Find record by ID from the database', function(done){
        Student.findOne({_id: student._id}).then(function(result){
            assert(result._id.toString() === student._id.toString());
            done();
        });
    });

});