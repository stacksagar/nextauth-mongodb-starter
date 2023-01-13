import mongoose from "mongoose";

const connection = {};

export default async function connectDatabase() {
  if (connection?.isConnected) return;

  return await mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database Connected!");
      connection.isConnected = true;
    })
    .catch((error) => {
      if (error) throw Error("Database connection error!");
    });
}
