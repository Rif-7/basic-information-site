const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) =>{
    if (req.url === "/") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("index.html", (err, data) => {
            if (err) {
                throw err
            }
            res.write(data);
            res.end()
        })
    
    } else if (req.url === "/about") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("about.html", (err, data) => {
            if (err) {
                throw err;
            }
            res.write(data);
            res.end();
        })
    } else if (req.url === "/contact-me") {
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.readFile("contact-me.html", (err, data) => {
            if (err) {
                throw err;
            }
            res.write(data);
            res.end();
        })
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        fs.readFile("404.html", (err, data) => {
            if (err) {
                throw err;
            }
            res.write(data);
            res.end();
        })
    }
});

server.listen(3000);
