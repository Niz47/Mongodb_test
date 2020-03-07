const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Deleting student record', function(){

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
    it('Delete record from the database', function(done){
        Student.findOneAndRemove({name: 'Shaun'}).then(function(){
            Student.findOne({name: 'Shaun'}).then(function(record){
                assert(record === null);
                done();
            });
        });
    });

});