WIP: ...

Running knex migrations with native ESM Modules from a Native ESM Module project/package

The gist:

    $ node -r esm node_modules/.bin/knex $*


The hack:  
Put all knex configuration, migration, and scripts inside a pseudo package  
the package "doesn't" set type='module'
This is NOT needed if the MAIN package is NOT of type 'module'



    $ touch ./.knex/package.json


Working on Node <= 12

    $ nvm use 12 \
        && yarn add sqlite3 && .knex/migrate \
            && node -r esm .

Working on Node >= 13 

    $ nvm use 13 
        && yarn add sqlite3 
            && .knex/migrate 
                && node . # no need to load esm
