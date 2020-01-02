import { resolve } from "path";
import dirname from "./dirname.js";

const config = {
  client: "sqlite3",
  connection: {
    filename: resolve(dirname(import.meta), "../my.sqlite.db"),
  },
  migrations: {
    directory: "./migrations",
    loadExtensions: [".js"],
  },
  seeds: {
    directory: "./seeds",
    loadExtensions: [".js"],
  },
};
/**
 *
 */
export default config;
