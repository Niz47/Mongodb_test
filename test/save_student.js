const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Saving student record', function(){
    // Create tests
    it('Save a record to the database', function(done){
        var student = new Student({
            name: "Adam"
        });
        student.save().then(function(){
            assert(student.isNew === false);
            done();
        });
    });

});