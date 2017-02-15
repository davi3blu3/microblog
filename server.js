var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/microblog', function(err, db) {

    assert.equal(err, null);
    console.log('Connected to Mongo Database on 27017');

})