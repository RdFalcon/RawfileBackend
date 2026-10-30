console.log("from app.cjs");
console.log("this is going ot be filename",__filename);
console.log("this is going ot be foldernaem",__dirname);
const helper=require("./helper.cjs");
helper.showLocation();
