Migrate:

    $ ./knex migrate:latest

Seed:

    $ ./knex seed:run latest

Run:

    $ node -r esm .

All:

    $ ./knex migrate:latest && ./knex seed:run latest && node -r esm .

NOTE: `node -r esm` is required becasue the `package.json` is NOT of module type and the sources are not `.mjs`