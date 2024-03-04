const MainClient = require("./nanospace");
const client = new MainClient();

client.connect()

module.exports = client; 

require("http").createServer((req, res) => res.end("CBH X CUSTOM BOT ")).listen(process.env.PORT || 8080)
