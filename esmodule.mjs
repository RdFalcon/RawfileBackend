

import {fileURLToPath} from "node:url";
import {dirname} from "node:path";
const fileURL=import.meta.url;
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
console.log("my file location is ",__filename);
console.log("my file folder is ",__dirname);
console.log(fileURL);
