var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
    author : {
        userName : {
            type : String,
            required : true
        },
    },
    content : {
        type: String,
        required : true
    },
    comment : [String],
    tags : [String]
});

mongoose.model('Post', postSchema);