/** @param {import("knex")} knex  */
export function seed(knex) {
  console.log("SEEDING!");
  const users = knex("user");
  return users.del().then(_ => {
    const data = [
      {
        username: "admin",
        email: "admin@localhost",
        password: "admin",
        roles: "admin",
        verified: true,
      },
    ];
    return users.insert(data);
  });
}
