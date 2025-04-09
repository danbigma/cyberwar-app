import mongoose, { Schema, Document } from "mongoose";

interface Registration extends Document {
  email: string;
  nickname: string;
  ratingType: string;
  ratingValue: number;
}

const RegistrationSchema: Schema = new Schema({
  email: { type: String, required: true },
  nickname: { type: String, required: true },
  ratingType: { type: String, required: true },
  ratingValue: { type: Number, required: true },
});

export default mongoose.model<Registration>("Registration", RegistrationSchema);
