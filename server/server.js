const express = require('express');
const path = require('path');

const app = express();

// Define the root directory for serving files
const rootDir = path.join(__dirname, 'public');

// Middleware to serve static files from the root directory
app.use(express.static(rootDir));

// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = process.env.PORT || 3000; // Use environment variable or default port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
