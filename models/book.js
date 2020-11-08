const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  // url string for thumbnail image
  authors: {
    type: String,
    default: ""
  },
 
  description: {
    type: String,
    default: ""
  },
   // url for book web page - unique index
  link: {
    type: String,
    default: ""
  },
   // url string for thumbnail image
  thumbnail: {
    type: String,
    default: ""
  },

});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;