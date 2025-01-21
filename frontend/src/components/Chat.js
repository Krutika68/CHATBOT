import React, { useState, useEffect } from 'react';
import { sendMessage, getMessages } from '../services/api';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const res = await getMessages();
        setMessages(res);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userMessage = userInput;
        const botResponse = "I'm a bot, I got your message!"; // You can replace this with actual bot logic

        await sendMessage(userMessage, botResponse);
        setMessages([...messages, { user_message: userMessage, bot_response: botResponse }]);
        setUserInput('');
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((msg, idx) => (
                    <div key={idx}>
                        <p><strong>User:</strong> {msg.user_message}</p>
                        <p><strong>Bot:</strong> {msg.bot_response}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chat;
