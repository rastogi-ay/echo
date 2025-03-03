require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Initialize express app
const app = express();

// Use middlewares
app.use(cors());  // Allow cross-origin requests
app.use(express.json());  // Parse JSON request bodies

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Set up server to listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
