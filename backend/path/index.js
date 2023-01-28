const path = require("path");
// console.log(__dirname);
// console.log(__filename);
console.log(`The name of the file ${path.basename(__filename)}`);
console.log(`Dir name ${path.dirname(__filename)}`);
console.log(path.join(__dirname, "/aaaa.tst", "dddd"));
