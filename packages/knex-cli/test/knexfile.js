/** @type {import("knex").Config}*/
const config = {
  client: "sqlite3",
  connection: {
    filename: "./my.sqlite.db",
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
/** default export */
export default config;
/** 
 * Accesible as named exports
 */
export const { client, connection, migrations, seeds } = config;
