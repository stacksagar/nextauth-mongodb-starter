import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // user unique id
    email: {
      type: String,
      required: true,
      unique: true,
    },

    name: {
      type: String,
      required: true,
    },

    password: String,
    balance: Number,
    phone: String,
    image: String,
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
