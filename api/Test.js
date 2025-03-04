import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const text = "https://discord.com/invite/hcJ8PHtkfy";
        navigator.clipboard.writeText(text).then(() => {
            console.log("Copied to clipboard:", text);
        }).catch(err => {
            console.error("Failed to copy:", err);
        });
    }, []);

    return (
        <div>
            <h1>Welcome to My Website</h1>
            <p>The latest data will be displayed here.</p>
        </div>
    );
}
