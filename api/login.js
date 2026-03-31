export default function handler(req, res) {
  const { password } = req.body;

  if (password === "admin123") {
    res.setHeader("Set-Cookie", "auth=owner; Path=/;");
    return res.status(200).json({ success: true });
  }

  res.status(401).json({ success: false });
}
