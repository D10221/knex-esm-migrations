/** @param {import("knex")} knex */
export function up(knex) {
    console.log("UP!")
    return knex.schema.createTable("user", table => {
      table
        .string("username")
        .unique()
        .notNullable();
      table.string("password").notNullable();
      table
        .string("email")
        .notNullable()
        .unique();
      table.string("roles");
      table.boolean("verified");
    });
  }
  /** @param {import("knex")} knex */
  export function down(knex) {
    console.log("DOWN!")
    return knex.schema.dropTable("users");
  }
  