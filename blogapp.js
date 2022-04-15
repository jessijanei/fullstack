//LIBRARIES LIBRARIES//
//LIBRARIES LIBRARIES//
//LIBRARIES LIBRARIES//
// const http = require("http");
const express = require("express");

// const hostname = "127.0.0.1";
const port = process.env.port || 3000;

const models = require("./models");
// const bcrypt = require("bcrypt");

const morgan = require("morgan");
const logger = morgan("tiny");

const app = express();
const es6Rendered = require("express-es6-template-engine");

app.use(logger);

const helmet = require("helmet");
app.use(helmet());

app.engine("html", es6Rendered);
app.set("views", "views");
app.set("view engine", "html");

// const customerDB = require("./customer");
// const membersDB = require("./members");
// const servicesDB = require("./services");
app.all("*", (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.use(express.json());
app.use(express.static("public"));
//ROUTE HANDLERS ROUTE HANDLERS ROUTE HANDLERS//
//ROUTE HANDLERS ROUTE HANDLERS ROUTE HANDLERS//
//ROUTE HANDLERS ROUTE HANDLERS ROUTE HANDLERS//
//GET GET GET//
//GET GET GET//
//GET GET GET//
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/shop", (req, res) => {
  res.render("shop");
});

app.get("/reviews", (req, res) => {
  res.render("reviews");
});
//POST POST POST POST//
//POST POST POST POST//
//POST POST POST POST//
app.post("/api/login", (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.json({ error: "Username, Email, and Password required." });
    return;
  }

  // bcrypt.hash(password, 5, (err, hash) => {
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
  // });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  models.User.findOne({
    where: { username: username },
  }).then;
  (user) => {
    if (!User) {
      res.json({ error: "no user with that username" });
      return;
    }

    // bcrypt.compare(password, user.password, (err, match) => {
    //   if (match) {
    //     res.json({ user_id: user.id, success: true });
    //   } else {
    //     res.json({ error: "incorrect password" });
    //   }
    // });
    if (password == user.password) {
      res.json({ user_id: user.id, success: true });
    } else {
      res.json({ error: "incorrect password" });
    }
  };
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
