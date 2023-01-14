import axios from "axios";

export function domain_url() {
  return process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://nextauth-mongodb-starter.vercel.app";
}

const axiosInstance = axios.create({
  baseURL: domain_url(),

  headers: {
    //  Authorization: `<Your Auth Token>`,
    "Content-Type": "application/json",
  },
  // .. other options
});

export default axiosInstance;
