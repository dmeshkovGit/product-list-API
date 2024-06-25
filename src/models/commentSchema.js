import { Schema, model } from 'mongoose';

const commentSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
  description: {
    type: String,
    required: [true, 'Put some comments'],
  },
  date: {
    type: Date,
    required: true,
  },
});

export const Comment = model('Comment', commentSchema);
