/** this can be 'imported' from the main app entry point */
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
/**
 *
 */
export default config;
