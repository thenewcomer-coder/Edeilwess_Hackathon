// Import required modules
const express = require('express');

// Create an instance of the express application
const app = express();
const port = 3001; // Port number on which server will run

// Define routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
