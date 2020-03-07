const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

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


