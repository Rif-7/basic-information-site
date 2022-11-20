const express = require("express");
const fs = require("fs");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
    fs.readFile("index.html", (err, data) => {
        if (err) {
            throw err;
        }
        res.write(data);
        res.send();
    } )
});

app.get("/contact-me", (req, res) => {
    fs.readFile("contact-me.html", (err, data) => {
        if (err) {
            throw err;
        }
        res.write(data);
        res.send();
    } )
});


app.get("/about", (req, res) => {
    fs.readFile("about.html", (err, data) => {
        if (err) {
            throw err;
        }
        res.write(data);
        res.send();
    } )
});


app.use((req, res) => {
    fs.readFile("404.html", (err, data) => {
        if (err) {
            throw err;
        }
        res.write(data);
        res.send();
    } )
});


app.listen(port, () => console.log("server running.."));