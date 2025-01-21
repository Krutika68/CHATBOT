const API_URL = 'http://localhost:5000/api';

export const getMessages = async () => {
    const res = await fetch(`${API_URL}/messages`);
    return res.json();
};

export const sendMessage = async (userMessage, botResponse) => {
    const res = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userMessage, botResponse }),
    });
    return res.json();
};
