import { NextApiResponse } from "next";

export default function response_message(
  res: NextApiResponse,
  status: number,
  message: string
) {
  return res.status(status).json({ message });
}
