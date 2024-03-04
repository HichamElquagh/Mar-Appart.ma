
const mongoose = require('mongoose');
const uri = process.env.ATLASS_DATABASE_URL;

function connectDatabase() {
  mongoose.connect(uri, {
    w: 'majority'
    
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  db.once('open', () => {
    console.log('Connected to the MongoDB database');
  });
}

module.exports = connectDatabase;

