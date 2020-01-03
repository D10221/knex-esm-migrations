import { execSync } from "child_process";
import { resolve, dirname } from "path";
import url from "url";
import assert from "assert";

const DIRNAME = dirname(new url.URL(import.meta.url).pathname);
const dropdb = ["rimraf", "my.sqlite.db", "&&"];
const knexesm = ["node", "../bin/knex.js"];
const join = args => args.reduce((a, b) => `${a} ${b}`);
const exec = (...args) =>
  execSync(join(args), { cwd: resolve(DIRNAME) }).toString("utf8");
/**
 *
 * @param  {...string} args
 */

describe("configuration,migration and seeds", () => {
  it("Works", function() {
    this.timeout(3000);
    assert.ok(
      /Batch 1 run: 1 migrations/.test(
        exec(...dropdb, ...knexesm, "migrate:latest"),
      ),
    );
    assert.ok(/Ran 1 seed files/.test(exec(...knexesm, "seed:run", "latest")));
  });
});
