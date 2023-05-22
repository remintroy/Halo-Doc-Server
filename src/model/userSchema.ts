import mongoose, { Schema } from 'mongoose';
import paginate from 'mongoose-paginate-v2';
import { IUser } from '../Types/interface.js';

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  profileURL: {
    type: String,
    required: true,
  },
  blocked: {
    type: Boolean,
    default: true,
  },
  notification: {
    type: [Object],
  },
});

userSchema.plugin(paginate);
const userModel = mongoose.model<IUser>('user', userSchema);
export default userModel;
