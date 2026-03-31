import { setData } from "./admin.js";

let latest = {};

export default function handler(req, res) {
  if (req.method === "POST") {
    latest = req.body;
    setData(latest);
    return res.status(200).json({ ok: true });
  }
  return res.status(200).json(latest);
}
