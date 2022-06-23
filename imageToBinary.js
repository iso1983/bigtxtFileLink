const fs = require("fs");
//// Create a base64 string from an image => ztso+Mfuej2mPmLQxgD ... DO NOT USE PNG 
const base64 = fs.readFileSync("./2.jpg", "base64");
console.log(base64);


// // Convert base64 to buffer/image => <Buffer ff d8 ff db 00 43 00 ... DO NOT USE PNG 
// const buffer = Buffer.from(base64, "base64");
// fs.writeFileSync("./output.jpg", buffer);


