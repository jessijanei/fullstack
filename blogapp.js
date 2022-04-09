const http = require("http");
const express = require("express");

// const hostname = "127.0.0.1";
const port = process.env.port || 3000;
const models = require("./models");
const bcrypt = require("./bcrypt");

const app = express();

const server = http.createServer(app);
// const customerDB = require("./customer");
// const membersDB = require("./members");
// const servicesDB = require("./services");

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.post("/login", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.json({ error: "Username, Email, and Password required." });
    return;
  }

  bcrypt.hash(password, 5, (err, hash) => {
    models.User.create({
      username: username,
      email: email,
      password: password,
    })
      .then((user) => {
        res.json({
          success: true,
          user_id: user.id,
        });
      })
      .catch((e) => {
        let errors = [];

        e.errors.forEach((error) => {
          errors.push(error.message);
        });

        res.json({ error: errors });
      });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  models.User.findOne({
    where: { username: username },
  }).then;
  (user) => {
    if (!User) {
      res.json({ error: "no user with that username" });
      return;
    }

    bcrypt.compare(password, user.password, (err, match) => {
      if (match) {
        res.json({ user_id: user.id, success: true });
      } else {
        res.json({ error: "incorrect password" });
      }
    });
  };
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

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
