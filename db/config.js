const mongoose = require('mongoose');
const mongoPass = process.env.MONGO_KEY || require('../mongo.js');

mongoose.connect(`mongodb+srv://jkconno:${mongoPass}@cluster0-uubnq.mongodb.net/FINANCR?retryWrites=true&w=majority`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('db connected');
});

const dataSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: String,
    year: Number,
    month: String,
    category: String,
    amount: Number
  });
  
const userSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: String,
    password: String,
    data: [dataSchema]
    }, {collection: 'users' });

const userLookup = mongoose.model('userLookup', userSchema);

module.exports = { userLookup };