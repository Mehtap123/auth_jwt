import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  adminstatus: {
    type: Boolean,
    required: true,
  },
});

export default model("User", userSchema);