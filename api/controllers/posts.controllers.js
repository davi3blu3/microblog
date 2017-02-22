var mongoose = require('mongoose');
var Post = mongoose.model('Post');

module.exports.postsGetAll = function(req, res) {

    var offset = 0;
    var count = 5;

    if (req.query && req.query.offset) {
        offset = parseInt(req.query.offset, 10);
    }

    if (req.query && req.query.count) {
        offset = parseInt(req.query.count, 10);
    }    

    Post
        .find()
        .exec(function(err, posts) {
            console.log("Found Posts", posts.length);
            res.json(posts);
        })
}