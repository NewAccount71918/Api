export default function handler(req, res) {
    res.setHeader("Content-Type", "text/plain");
    res.send('setclipboard("https://discord.com/invite/hcJ8PHtkfy")');
}
