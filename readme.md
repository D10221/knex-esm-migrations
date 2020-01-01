WIP: ...

Running knex migrations with native ESM Modules from a Native ESM Module project/package

The gist:

    $ node -r esm node_modules/.bin/knex $*


The hack:  
Had to put all .knex configuration inside a pseudo package


    $ touch ./.knex/package.json