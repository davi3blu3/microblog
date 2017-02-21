var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true
    },
    comment : {
        type: String,
        required : true
    },
    createdOn : {
        type : Date,
        "default" : Date.now 
    }
})

var postSchema = new mongoose.Schema({
    author : {
        type: String,
        required: true
    },
    content : {
        type: String,
        required: true
    },
    comments : [commentSchema],
    tags : [String],
    createdOn : {
        type: Date,
        "default" : Date.now
    }
});

mongoose.model('Post', postSchema);