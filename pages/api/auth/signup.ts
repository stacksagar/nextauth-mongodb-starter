import { NextApiRequest, NextApiResponse } from "next";
import connectDatabase from "../../../lib/connectDatabase";
import User from "../../../model/User";
import argon from "argon2";
import response_message from "../../../lib/response_message";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    // connect database
    await connectDatabase();

    // check request method POST or not
    if (req.method !== "POST")
      throw Error("HTTP method not valid only POST Accepted!");

    // check req body empty
    if (!req.body) return response_message(res, 404, "Don't have form data!");
    const { name, email, password } = req.body;

    // check email already used
    const exist_user = await User.findOne({ email });
    if (exist_user?.email)
      return response_message(res, 422, "Email already in use!");

    // create user
    const hash = await argon.hash(password);
    User.create(
      { name, email, password: hash, balance: 0 },
      (error: any, doc: any) => {
        if (error) throw Error(error?.message);
        res.status(200).json({ user: doc });
      }
    );
  } catch (error: any) {
    return response_message(res, 500, error?.message);
  }
}
