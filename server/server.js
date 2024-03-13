const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth/auth.router');
const apartmentRouter = require('./routes/apartment/apartment.router');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')


const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


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
app.use('/apartments', apartmentRouter );
// Start the server
const port = process.env.PORT || 3000; // Use environment variable or default port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
