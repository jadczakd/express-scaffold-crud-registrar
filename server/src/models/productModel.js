import mongoose from 'mongoose'

const Float = require('mongoose-float').loadType(mongoose, 2)

const productSchema = new mongoose.Schema({
  brand: String,
  category: String,
  images: [String],
  title: String,
  description: String,
  price: Float
}, { strict: true, timestamps: true })

export default mongoose.model('product', productSchema)
