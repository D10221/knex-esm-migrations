import Knex from "knex";
import knexfile from "./.knex/knexfile.js";
console.log(knexfile);

const knex = Knex(knexfile);
knex("user")
  .select()
  .then(console.log)
  .catch(console.error)
  .then(process.exit);
