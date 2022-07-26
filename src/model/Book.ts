

import mongoose from 'mongoose'

const bookSchema = new  mongoose.Schema({
  name: {
    type: String,
    lowercase: true
  },
  description: {
    type: String,
    lowercase: true
  },
  image: {
    type: String,
  },
  userUID: {
    type: String,
    ref: 'User'
  },
  price: {
    type: Number,
  },
  category: [{
    type: String
  }],
  
}, { timestamps: true })

const Book = mongoose.model('Book',bookSchema)
export default Book


