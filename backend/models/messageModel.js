const db = require('../db/database');

const createMessageTable = () => {
    const query = `
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_message TEXT,
        bot_response TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    `;
    db.run(query);
};

const saveMessage = (userMessage, botResponse) => {
    const query = 'INSERT INTO messages (user_message, bot_response) VALUES (?, ?)';
    db.run(query, [userMessage, botResponse], function(err) {
        if (err) {
            console.error(err.message);
        } else {
            console.log(`A new message has been added with ID ${this.lastID}`);
        }
    });
};

const getMessages = (callback) => {
    const query = 'SELECT * FROM messages ORDER BY created_at DESC';
    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }
        callback(rows);
    });
};

module.exports = { createMessageTable, saveMessage, getMessages };
