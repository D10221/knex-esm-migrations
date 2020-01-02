Migrate:

    $ ./knex migrate:latest

Seed:

    $ ./knex seed:run latest

Run:

    $ node -r esm .

All:

    $ ./knex migrate:latest && ./knex seed:run latest && node -r esm .