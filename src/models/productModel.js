import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  imageUrl: {
    type: String,
    default:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fnew-product&psig=AOvVaw3RJnM0u8FPe0TppfIovPY2&ust=1719410415768000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNimsI_19oYDFQAAAAAdAAAAABAE',
    required: true,
  },
  name: {
    type: String,
    default: null,
    required: [true, 'Set name for product'],
  },
  count: {
    type: Number,
    default: null,
    required: [true, 'Set count of product'],
  },
  size: {
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  },
  weight: {
    type: String,
    required: true,
  },
});

export const Product = model('Product', productSchema);
