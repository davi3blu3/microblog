var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

MongoClient.connect('mongodb://localhost:27017/microblog', function(err, db) {

    assert.equal(err, null);
    console.log('Connected to Mongo Database on 27017');

    var coll = 'posts';

    db.collection(coll).find().toArray(function(err, docs) {
        assert.equal(err, null);
        assert.notEqual(docs.length, 0);

        docs.forEach(function(doc) {
            console.log(doc.author.userName + " said " + doc.content);
        })
    });

    db.close();

})