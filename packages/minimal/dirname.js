import { dirname } from "path";
import url from "url";
/**
 * @argument {ImportMeta} meta
 */
function _dirname(meta) {
  return dirname(new url.URL(meta.url).pathname);
}
export default _dirname;
