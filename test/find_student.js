const assert = require('assert');
const Student = require('../model/student');

// Describe test
describe('Finding student record', function(){

    beforeEach(function(done){
        var student = new Student({
            name: "Shaun"
        });
        student.save().then(function(){
            done();
        });
    });

    // Create tests
    it('Find record(s) from the database', function(done){
        Student.findOne({name: 'Shaun'}).then(function(result){
            assert(result.name === 'Shaun');
            done();
        });
    });

});