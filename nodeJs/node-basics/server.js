const http = require("http");
const fs = require("fs");
import {add, subtract} from "./math.js"

fs.readFile("file.txt", "utf-8", (err, data) => {
    console.log(data)
    // console.log(err)
})
console.log("this run first")

const server = http.createServer((req, res) => {
  res.write("Hello! from node server");
  // console.log(req.url)
  res.end();
});

console.log(math.add(10, 10));
console.log(math.subtract(10, 5))

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
