import fs from "fs";

const FILE = "/tmp/config.json";
const TOKEN = "SUPER_RANDOM_TOKEN";

export default function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).end();
    }

    const { token, ...data } = req.body;

    if (token !== TOKEN) {
        return res.status(403).json({ error: "Unauthorized" });
    }

    try {
        fs.writeFileSync(FILE, JSON.stringify(data));
        return res.json({ success: true });
    } catch (e) {
        return res.status(500).json({ error: "Failed save" });
    }
}
