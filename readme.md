Using ['esm'](3) to run [Knex](4) migrations, seeeds and configuration with Native NodeJS [ECMAScript Modules](2) and only '.js' extension

Two use cases:

1) Running [knex](1) migrations  
With native ESM Modules  
Using ONE shared configuration  
When the MAIN/project/package type is `module`.  
See `./packages/itscomplicated`

2) Running [knex](4) migrations  
With native ESM Modules  
From a NON Native ESM Module MAIN/project/package.  
When the MAIN/project/package type is NOT `module`.  
see `./packages/minimal`

[1]: https://github.com/knex/knex
[2]: https://nodejs.org/docs/latest-v13.x/api/esm.html
[3]: https://github.com/standard-things/esm
[4]: https://github.com/knex/knex