import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  contacts: String,
  password: String,
}, { timestamps: true });

export default model("user", userSchema);
