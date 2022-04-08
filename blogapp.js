const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const express = require("express");
const app = express();

const server = http.createServer(app);
// const customerDB = require("./customer");
// const membersDB = require("./members");
// const servicesDB = require("./services");

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/login", (req, res) => {
  res.send("Log In");
});

app.get("/register-form", (req, res) => {
  res.send("Log In");
});

app.get("/shop", (req, res) => {
  res.send("SHOP SHOP SHOP!!!!!!!");
});

app.get("/gallery", (req, res) => {
  res.send("SHOP SHOP SHOP!!!!!!!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
