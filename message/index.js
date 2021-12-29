const path = require("path");
const filePath = path.join("greeting", "index.js");
const reqData = require(filePath);
console.log(reqData);
