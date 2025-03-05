let latestData = {}; // Lưu dữ liệu mới nhất

export default async function (req, res) {
    if (req.method === "POST") {
        latestData = req.body; // Cập nhật dữ liệu mới
        console.log("Received Data:", latestData);
        return res.status(200).json({ message: "Received", data: latestData });
    }
    
    if (req.method === "GET") {
        if (Object.keys(latestData).length === 0) {
            return res.status(404).json({ message: "No data received yet" });
        }
        return res.status(200).json({ status: "success", data: latestData });
    }

    return res.status(405).json({ message: "Method Not Allowed" });
}
