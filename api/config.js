import fs from "fs";

const FILE = "/tmp/config.json";

export default function handler(req, res) {
    try {
        const data = fs.readFileSync(FILE, "utf-8");
        return res.json(JSON.parse(data));
    } catch {
        return res.json({
            server_name: "Loading...",
            status: "DOWN",
            online: 0,
            worlds: 0,
            guilds: 0,
            accounts: 0
        });
    }
}
