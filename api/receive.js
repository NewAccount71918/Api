export default function handler(req, res) {
    if (req.method === "POST") {
        res.status(200).json({ status: "success", data: req.body });
    } else {
        res.status(404).json({ message: "Not Found" });
    }
}
