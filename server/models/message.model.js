const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema ({

    topic: {
        type: String,
        required: [true, "Please select a topic."],
        enum: [
            "Cars",
            "Comedy",
            "Family",
            "Fashion",
            "Finance",
            "Food",
            "Hobbies",
            "Home",
            "Movies",
            "Music",
            "Pets",
            "Sport",
            "Technology",
            "Travel",
            "Video Games"
        ]
    },

    title: {
        type: String,
        required:[true, "Please enter a title."],
        minlength: [3, "Title must be at least 3 characters long."]
    },

    comment: {
        type: String,
        required: [true, "Please enter a comment."],
        minlength: [10, "Comment must be at least 10 characters long."]
    },

    image:{
        type: String,
    },

    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;