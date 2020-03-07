const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Updating student record', function(){

    var student;

    beforeEach(function(done){
        student = new Student({
            name: "Shaun",
            weight: 20
        });
        student.save().then(function(){
            done();
        });
    });

    // Create test 1
    it('Update a record in the database', function(done){
        Student.findOneAndUpdate({name: 'Shaun'}, {name: 'Adam'}).then(function(){
            Student.findOne({_id: student._id}).then(function(result){
                assert(result.name === 'Adam');
                done();
            });
        });
    });

    // Create test 2
    it('Increments the age for every record by 1 in the database', function(done){
        Student.update({}, {$inc: {weight: 1}}).then(function(){
            Student.findOne({name: 'Shaun'}).then(function(record){
                assert(record.weight === 21);
                done();
            });
        });
    });

});