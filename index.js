const express = require("express");
const os = require("os");

const app = express();

app.get('/', (req, res) => {
	res.send("<h1>Hi from Lovepreet</h1>");
})

const port = 3000;
app.listen(port, ()=>console.log("Listening on port 3000"));
