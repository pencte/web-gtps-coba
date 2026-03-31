let latest = {
  status: "offline"
};

export default function handler(req, res) {

  // 🔥 BOT KIRIM DATA (POST)
  if (req.method === "POST") {
    latest = req.body;
    return res.status(200).json({ ok: true });
  }

  // 🌐 WEB AMBIL DATA (GET)
  if (req.method === "GET") {
    return res.status(200).json(latest);
  }
}
