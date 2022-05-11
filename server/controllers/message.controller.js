const mongoose = require("mongoose");
const Message = require("../models/message.model");

module.exports = {

    findAllMessages: (req, res) => {
        Message.find()
            .then((allMessages) => {
                console.log(allMessages);
                res.json(allMessages);
            })
            .catch((err) => {
                console.log("Find all messages failed");
                res.json({message: "Something went wrong in findAll", error: err})
            })
    },

    createMessage: (req, res) => {
        Message.create(req.body)
            .then((newMessage) => {
                console.log(newMessage);
                res.json(newMessage)
            })
            .catch((err) => {
                console.log("Create message failed");
                res.status(400).json(err);
            })
    },

    findOneMessage: (req, res) => {
        Message.findOne({_id: req.params.id})
            .then((oneMessage) => {
                console.log(oneMessage);
                res.json(oneMessage)
            })
            .catch((err) =>{
                console.log("Find one message failed");
                res.json({message: "Something went wrong in findOne", error: err})
            })      
    },

    deleteOneMessage: (req, res) => {
        Message.deleteOne({_id: req.params.id})
            .then((deletedMessage) => {
                console.log(deletedMessage);
                res.json(deletedMessage)
            })
            .catch((err) =>{
                console.log("Delete one message failed");
                res.json({message: "Something went wrong in deleteOne", error: err})
            })      
    },

    updateOneMessage: (req, res) => {
        Message.findOneAndUpdate({_id: req.params.id}, 
            req.body,
            {new: true, runValidators: true}
            )
            .then((updatedMessage) => {
                console.log(updatedMessage);
                res.json(updatedMessage)
            })
            .catch((err) =>{
                console.log("Update one message failed");
                res.status(400).json(err);
            })      
    },

}


