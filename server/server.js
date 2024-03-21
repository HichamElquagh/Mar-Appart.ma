const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth/auth.router');
const apartmentRouter = require('./routes/apartment/apartment.router');
const userRouter = require('./routes/users/user.router');
const reservationRouter = require('./routes/reservation/reservation.router');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors')


app.use(cookieParser());
const connectDatabase = require('./config/db');
app.use(express.json());
app.use(bodyParser.json());
// Set up the express app to handle data parsing


connectDatabase();
app.use(cors(
  {
    credentials: true,
    origin: "http://localhost:5173", 
  }
  ));








// Error handling (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

app.use('/auth', authRouter);
app.use('/apartments', apartmentRouter );
app.use('/users', userRouter);
app.use('/reservations', reservationRouter);
// Start the server
const port = process.env.PORT || 3000; // Use environment variable or default port 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
