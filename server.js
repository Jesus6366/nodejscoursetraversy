import { error } from "console";
import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // ROUTER
  try {
    // check if Get request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        // just in regular node.js
        res.end("<h1>Home page</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        // just in regular node.js
        res.end("<h1>About page</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        // just in regular node.js
        res.end("<h1>Not found</h1>");
      }
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    // just in regular node.js
    res.end("Server error");
  }

  // get the requested url
  console.log(req.url);
  // get the method used
  console.log(req.method);
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
