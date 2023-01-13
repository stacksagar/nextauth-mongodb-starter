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

  phone: String,

  password: {
    type: String,
    required: true,
  },

  balance: Number,

  deposits: Array,
  orders: Array,
  withdraw: Array,
});

export default mongoose.models.User || mongoose.model("User", userSchema);
