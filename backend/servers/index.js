const http = require("http");
const url = require("url");
http
  .createServer((req, res) => {
    res.write("Hello world2");
    res.end();
  })
.listen(8080);

const products = [
  { id: 1, title: "Men shirt", price: "20$" },
  { id: 2, title: "sweatshirt", price: "30$" },
];

// JSON.stringify(obj)==> "{'id':'1','title':'men shirt'}"

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });
    res.write(JSON.stringify(products));
    res.end();
  })
  .listen(8081);

http
  .createServer((req, res) => {
    // request url from req object
    const reqUrl = url.parse(req.url).pathname;

    res.writeHead(200, { "Content-Type": "text/html" });
    if (reqUrl === "/") {
      console.log(url.parse(req.url));
      res.write("<h1>Home page</h1>");
      res.end();
    } else if (reqUrl === "/about") {
      console.log(url.parse(req.url));
      res.write("<h1>about page</h1>");
      res.end();
    } else {
      console.log(url.parse(req.url));
      res.write("<h1>404, not found page</h1>");
      res.end();
    }
  })
  .listen(8083);
