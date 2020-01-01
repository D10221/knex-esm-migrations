import {resolve, dirname } from "path";
import { fileURLToPath } from 'url';

/** @type {import("knex").Config} */
const config = {
  client: "sqlite3",
  connection: {
    filename: resolve(dirname(fileURLToPath(import.meta.url)), "../my.sqlite.db"),
  },
  migrations: {
    directory: "./migrations",
    loadExtensions: [".js"],
  },
  seeds: {
    directory: "./seeds",
  },
};
export default config;
/** Note: knex is looking on modules.exports , not module.exports.default */
export const { client, connection, migrations, seeds } = config;
