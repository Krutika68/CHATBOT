const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes');
const messageModel = require('./models/messageModel');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

messageModel.createMessageTable();

app.use('/api', messageRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
