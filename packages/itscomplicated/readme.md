if the MAIN package (the app) is NOT a ['module'](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_code_package_json_code_code_type_code_field) you don't need the following instructions.  
Instead, see `../minimal`

If the MAIN package is a ['module'](https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_code_package_json_code_code_type_code_field).  

When the MAIN package is a module, the module resolution will find  our `root` package and tell us that we should `import` instead of `require`.  
To overcome this limitaion, it should be possible to configure 'esm'.  
But I'm not going to do that, I want it to work with the default configuration.

The Hack:  
Putting all knex configuration, migration,seeds, ...etc, inside a local/pseudo package will stop the module resolution reaching the `../parent` module and telling us that we need to use `import` instead of `require`.  
NOTES: 
- The pseudo package "doesn't" set type='module'.
- There is no need to install or add dependencies .  
This `local` package will use whatever is referenced by the `MAIN` module.  
- Because I want to use ONE shared ['configuration'](./.knex/knexfile.js), I'm re-exporting it for knex to find its named exports, (Knex doesn't see the 'default' export).


How: 

Create the subdir and move all related

    $ mkdir .knex && mv [allmy_knex_stuff] .knex/
    $ cd .knex && yarn init -y # make it private



NOTE:  

Running on Node v13

    # Note: the absence `-r esm` 
    $ .knex/migrate && node . 


If using Node version <= 12

    # Note: the extra `-r esm` 
    $ nvm use 13 && yarn && .knex/migrate && node -r esm .
