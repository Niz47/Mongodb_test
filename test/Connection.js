const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

// Connect to DB before tests run
before(function(done){
    // Connect to Mongodb
    mongoose.connect('mongodb://localhost/testDB', {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('Connection has been made, now make fireworks...');
        done();
    }).on('error', function(error){
        console.log('Connection Error:' . error);
    });
});

// Drop all students collection before each test
beforeEach(function(done){
    // Drop the collections (***students need to be plural***)
    mongoose.connection.collections.students.drop(function(){
        done();
    });
});
