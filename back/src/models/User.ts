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
  user: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

export default model<IUser>('User', userSchema);
