/** @type {NodeRequire} */
require = require("esm")(module);

require.extensions[".js"] = (module, filename) => {
  module._compile(require("fs").readFileSync(filename, "utf8"), filename);
};
module.exports = require("./knexfile.js");
