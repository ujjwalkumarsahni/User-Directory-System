const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));

    
const userSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        imageURL: String,
    }
);


const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;