const mongoose = require('mongoose');

// Koneksi ke MongoDB
const connectMongoDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/usersdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = { connectMongoDB };
