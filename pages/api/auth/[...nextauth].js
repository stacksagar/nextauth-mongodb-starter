import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDatabase from "../../../lib/connectDatabase";
import User from "../../../model/User";
import argon from "argon2";

export default NextAuth({
  providers: [
    // Google Provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      // httpOptions: {
      //   timeout: 100000,
      // },
    }),

    // With CustomCredentials
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        await connectDatabase();

        // check user existance
        const user = await User.findOne({ email: credentials?.email });
        if (!user) throw Error("Email or Password doesn't match!");

        // check password
        const matchedPassword = await argon.verify(
          user?.password,
          credentials?.password
        );

        if (!matchedPassword || user.email !== credentials.email)
          throw Error("Email or Password doesn't match!");

        return user;
      },
    }),
  ],

  secret: "NE6qyym4mH0hNJP7nAq+kNS6OGo0RUfXPkCWyYl46cA=",
});
