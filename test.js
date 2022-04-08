const db = require("./models");

db.Seqpokemon.findAll().then((results) => {
  results.forEach((result) => {
    console.log(result.toJSON());
  });
});
