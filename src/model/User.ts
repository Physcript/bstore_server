



import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    lowercase: true,
  },
  lastName: {
    type: String,
    lowercase: true
  },
  email: {
    type: String,
    lowercase: true
  },
  password: {
    type: String
  },
  uid: {
    type: String,
  },
  token: {
    type: String,
  },
  avatar: {
    type: String
  }

}, { timestamps: true })

const User = mongoose.model('User', userSchema)
export default User
