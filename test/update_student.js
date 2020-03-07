const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Updating student record', function(){

    var student;

    beforeEach(function(done){
        student = new Student({
            name: "Shaun"
        });
        student.save().then(function(){
            done();
        });
    });

    // Create test 
    it('Update a record in the database', function(done){
        Student.findOneAndUpdate({name: 'Shaun'}, {name: 'Adam'}).then(function(){
            Student.findOne({_id: student._id}).then(function(result){
                assert(result.name === 'Adam');
                done();
            });
        });
    });

});