import { model, Schema, Document } from 'mongoose';

export interface ISale extends Document {
  total: Number;
  products: Array<any>;
  customerid: String;
  customername: String;
  user: String;
  status: String;
}

const saleSchema = new Schema({
  total: {
    type: Number,
    required: true,
  },
  products: [
    {
      id: String,
      amount: Number,
      value: Number,
    },
  ],
  customerid: String,
  customername: String,
  user: String,
  status: {
    type: String,
    required: true,
    default: 'en proceso',
  },
});

export default model<ISale>('Sale', saleSchema);
