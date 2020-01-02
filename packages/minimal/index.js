import Knex from "knex";
import knexfile from "./knex.file.js";
console.log(knexfile);

const knex = Knex(knexfile);
knex("user")
  .select()
  .then(console.log)
  .catch(console.error)
  .then(process.exit);
