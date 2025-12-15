import mongoose, { Document, Schema } from 'mongoose'

export interface IProduct extends Document {
  name: string
  description: string
  price: number
  category: string
  carat: number
  color: string
  origin: string
  image: string
  stock: number
  seller: mongoose.Types.ObjectId
  createdAt: Date
}

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      required: true,
      enum: ['ruby', 'sapphire', 'emerald', 'diamond', 'topaz', 'amethyst', 'other'],
    },
    carat: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
      default: 1,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<IProduct>('Product', productSchema)
