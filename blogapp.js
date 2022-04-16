//LIBRARIES LIBRARIES//
//LIBRARIES LIBRARIES//
//LIBRARIES LIBRARIES//
// const http = require("http");
const express = require("express");
const cookieParser = require('cookie-parser');
const createError = ('http-errors');
const morgan = require("morgan");
const logger = morgan("tiny");

// const hostname = "127.0.0.1";
const port = process.env.port || 3000;

const models = require("./models");
// const bcrypt = require("bcrypt");



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
const db = require("./models");


//MIDDLEWARE MIDDLEWARE MIDDLEWARE//
//MIDDLEWARE MIDDLEWARE MIDDLEWARE//
//MIDDLEWARE MIDDLEWARE MIDDLEWARE//


//catch 404 and forward to error handler//
// app.use(req, res, next) => {
//   next(createError(404))
// }




app.all("*", (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// app.use(req, res, next) => {
//   if(!req.user)
//   return next (createError(401, 'Please login to view this page'))
//   next();
// }

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
  db.customer.findAll().then((results) => {
    results.forEach((result) => {
      console.log(result.toJSON());
    });
  });
  res.render("login");
});

app.get("/gallery", (req, res) => {
  res.render("gallery");
});

app.get("/about-us", (req, res) => {
  res.render("about-us");
});

app.get("/shop", (req, res) => {
  db.product.findAll().then((results) => {
    results.forEach((result) => {
      console.log(result.toJSON());
    });
  })
  res.render("shop");
});

app.get("/reviews", (req, res) => {
  res.render("reviews");
});

app.get("/welcome", (req, res) => {
  res.render("welcome");
})
//POST POST POST POST//
//POST POST POST POST//
//POST POST POST POST//
//CREATE AN ACCOUNT CREATE AN ACCOUNT//
//CREATE AN ACCOUNT CREATE AN ACCOUNT//
//CREATE AN ACCOUNT CREATE AN ACCOUNT//
app.post("/signup", (req, res) => {
  const { fullname, email, password, address, phone_number, dob } = req.body;
  if (!fullname || !email || !address || !phone_number || !dob || !password) {
    res.json({ error: "All fields required." });
    return;
  }

  // bcrypt.hash(password, 5, (err, hash) => {
  models.customer.create({
    fullname: fullname,
    email: email,
    password: password,
    address: address,
    phone_number: phone_number,
    dob: dob
  })
    .then((customer) => {
      res.json({
        success: true,
        customer_id: customer.id,
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
//SIGN IN SIGN IN SIGN IN//
//SIGN IN SIGN IN SIGN IN//
//SIGN IN SIGN IN SIGN IN//

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  models.customer.findOne({
    where: { email: email },
  }).then(
    (member) => {
      if (!member) {
        res.json({ error: "no member with that username" });
        return;
      }

      // bcrypt.compare(password, user.password, (err, match) => {
      //   if (match) {
      //     res.json({ user_id: user.id, success: true });
      //   } else {
      //     res.json({ error: "incorrect password" });
      //   }
      // });
      if (password == member.password) {
        res.json({ user_id: member.id, success: true });
      } else {
        res.json({ error: "incorrect password" });
      }
    });
});


//SHOP SHOP SHOP//
//SHOP SHOP SHOP//
//SHOP SHOP SHOP//
// app.post("/api/shop", (req, res) => {
//   models.product.findAll().then((results) => {
//     results.forEach((result) => {
//       console.log(result.toJSON());
//     });
// })

const myRegex = /Hello World/
const test = myRegex.test("Hello World")

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
