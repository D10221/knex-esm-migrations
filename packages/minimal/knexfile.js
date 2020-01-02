/** 
 * Have to re-export defaul 
 * because Knex looks into named exports 
 * it doesn't see 'default' */
module.exports = require("esm")(module)("./knex.file.js").default;
