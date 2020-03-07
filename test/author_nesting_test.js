const mongoose = require('mongoose');
const assert = require('assert');
const Author = require('../model/author');

// Describe tests
describe("Nesting records", function(){
    
    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        });
    });

    // Create test 1
    it('Create an author with sub-documents', function(done){
        var author = new Author({
            name: 'Patrick Rothfuss',
            books: [
                {title: 'Name of the Wind', pages: 401}
            ]
        });

        author.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                assert(record.books.length === 1);
                done();
            });
        });
    });

    // Create test 2
    it('Add a book to saved author', function(done){
        var author = new Author({
            name: 'Patrick Rothfuss',
            books: [
                {title: 'Name of the Wind', pages: 401}
            ]
        });

        author.save().then(function(){
            Author.findOne({name: 'Patrick Rothfuss'}).then(function(record){
                // add a book to the books array
                record.books.push({title: "Wise Man's Fear", pages: 500});
                record.save().then(function(){
                    Author.findOne({name: 'Patrick Rothfuss'}).then(function(){
                        assert(record.books.length === 2);
                        done();
                    });
                });
            });
        });
    });
});