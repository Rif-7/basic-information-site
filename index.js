const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("index.html", (err, data) => {
            if (err) {
                throw err
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end()
        })
  
    }
});

server.listen(3000);
