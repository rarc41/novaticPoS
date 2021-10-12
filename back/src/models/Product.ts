import { model, Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  id: String;
  description: String;
  value: Number;
  status: Number;
}

const productSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  status: {
    type: Number,
    default: 1,
    required: true,
  },
});

export default model<IProduct>('Product', productSchema);
