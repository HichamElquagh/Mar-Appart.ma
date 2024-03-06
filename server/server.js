const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth/auth.router');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')

// Set up the express app to handle data parsing
const connectDatabase = require('./config/db');

app.use(cookieParser());
app.use(express.json());
connectDatabase();


app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true
  }

));


// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.use('/auth', authRouter);
// Start the server
const port = process.env.PORT || 3000; // Use environment variable or default port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
