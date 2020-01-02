import Knex from "knex";
import knexfile from "./knexfile.js";

const knex = Knex(knexfile);
knex("user")
  .select()
  .then(console.log)
  .catch(console.error)
  .then(process.exit);
