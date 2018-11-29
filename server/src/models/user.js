import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  mail: String
}, { strict: true, timestamps: true })

export default mongoose.model('user', userSchema)
