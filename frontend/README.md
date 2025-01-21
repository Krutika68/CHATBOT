# Chatbot Project

This project is a simple chatbot application with a **React frontend** and a **Node.js backend**. The backend stores the chat messages in an **SQLite** database, and the frontend provides a chat interface to interact with the chatbot.

## Features

- **Frontend**:
  - Built with **React**.
  - Displays a chat interface where users can send messages and receive responses from the chatbot.
  - Displays chat history fetched from the backend.
  
- **Backend**:
  - Built with **Node.js** and **Express**.
  - Uses an **SQLite** database to store chat messages.
  - Provides APIs to retrieve and store messages.

## Prerequisites

To run this project, make sure you have the following installed on your machine:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### For the frontend (React):
- **npm** or **yarn** to install dependencies.

### For the backend (Node.js):
- **SQLite** (or you can use MySQL/PostgreSQL as an alternative)

## Installation

### 1. **Clone the Repository**

First, clone the repository to your local machine.

```bash
git clone https://github.com/your-username/chatbot.git
cd chatbot
```

### 2. **Backend Setup**
Navigate to the backend folder and install the required dependencies:

```bash
cd backend
npm install
```
---Running the Backend
To start the backend server, run:

```bash
node app.js
```
---The backend will run on port 5000, and you should see the following message:
Server is running on port 5000
Connected to the chatbot database.

### 3. **Frontend Setup**
Navigate to the frontend-app folder and install the required dependencies:

```bash
cd frontend
npm install
```

---Running the Frontend
To start the frontend React app, run:

```bash
npm start
```