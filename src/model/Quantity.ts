


import mongoose from 'mongoose'

const quantitySchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  },
  count: {
    type: Number
  } 
})


const Quantity = mongoose.model('Quantity',quantitySchema)
export default Quantity


