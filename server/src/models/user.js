import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  mail: String,
  address: {
    street: String,
    city: String,
    zip: String,
    country: String
  }
}, { strict: true, timestamps: true })

export default mongoose.model('user', userSchema)
