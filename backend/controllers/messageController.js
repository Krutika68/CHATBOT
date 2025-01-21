const messageModel = require('../models/messageModel');

const getMessages = (req, res) => {
    messageModel.getMessages((messages) => {
        res.json(messages);
    });
};

const postMessage = (req, res) => {
    const { userMessage, botResponse } = req.body;
    messageModel.saveMessage(userMessage, botResponse);
    res.status(200).send({ message: 'Message saved successfully' });
};

module.exports = { getMessages, postMessage };
