import { model, Schema, Document } from 'mongoose';

export interface IUser extends Document {
  id: String;
  usuario: String;
  rol: String;
  estado: String;
}

const userSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
});

export default model<IUser>('User', userSchema);
