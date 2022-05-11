const MessageController = require("../controllers/message.controller");

module.exports = (app) => {
    
    app.get("/api/messages", MessageController.findAllMessages);
    app.post("/api/messages", MessageController.createMessage);
    app.get("/api/messages/:id", MessageController.findOneMessage);
    app.delete("/api/messages/:id", MessageController.deleteOneMessage);
    app.put("/api/messages/:id", MessageController.updateOneMessage);

}