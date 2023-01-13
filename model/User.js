import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

  password: {
    type: String,
    required: true,
  },

  balance: Number,
  phone: String,
  image: String,

  deposits: Array,
  orders: Array,
  withdraw: Array,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
