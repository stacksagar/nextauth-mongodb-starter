import { NextApiResponse, NextApiRequest } from "next";
import connectDatabase from "../../../lib/connectDatabase";
import User from "../../../model/User";
import response_message from "../../../lib/response_message";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    await connectDatabase();

    if (!req.headers?.email) throw Error("Email Verification Failed!");

    const { email }: any = req.headers;

    const { _doc: user } = await User.findOne({ email });
    user.password = undefined;

    res.status(200).json({ status: "ok", user });
  } catch (error: any) {
    return response_message(res, 500, error?.message);
  }
}
