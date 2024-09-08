import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  //   res.setHeader("Content-Type", "text/html");
  //   res.statusCode = 404;

  // this is the same
  res.writeHead(200, { "Content-Type": "text/html" });

  // just in regular node.js
  res.end("<h1>Hello world</h1>");
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
