const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bookSchema = new Schema({
  title: String,
  description: String,
  // author: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  },
  reviews: [
    {
      user: String,
      comment: String
    }
  ],
  rating: Number
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;

