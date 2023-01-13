import User from "../../model/User";
import cd from "../../lib/connectDatabase";

export default async function (req, res) {
  await cd();

  User.find((err, result) => {
    if (err) return res.json({ message: "not found!" });
    return res.json({ result });
  });
}
