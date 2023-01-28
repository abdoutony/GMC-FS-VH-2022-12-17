const fs = require("fs");
/**reading from file */

// synchrounous blocking way
// const file = fs.readFileSync("./test.txt", "UTF-8");
// console.log(file);
// console.log("Starting reading file");

//async way non blocking way
// fs.readFile("./test.txt", "utf-8", (err, data) => {
//   // error first callback
//   if (err) {
//     console.log(`Error message: ${err.message}`);
//   } else {
//     console.log(data);
//   }
// });
// console.log("Starting reading file");

/** writing in a file */
// let newText = "hello from write file";
// // sync way blocking
// fs.writeFileSync("./test.txt", newText);
// console.log("Starting writing in file");

// let newText2 = "im text 2";
// fs.writeFile("./test2.txt", newText2, (err) => {
//   if (err) {
//     console.log(`Error message ${err.message}`);
//   } else {
//     fs.readFile("./test.txt", "utf-8", (err, data) => {
//       if (err) {
//         console.log(`Error message ${err.message}`);
//       } else {
//         console.log(data);
//       }
//     });
//   }
// });

/**
 * apprend content to a file
 */

// blocking way
// let textToAppend = "This text will be appended";
// fs.appendFileSync("./test.txt", textToAppend);
// let txt = fs.readFileSync("./test.txt", "UTF-8");
// console.log(txt);
// console.log("Appending then reading");

// async non blocking way
// let textToAppend2 = "iam the second text to be appended";
// fs.appendFile("./test.txt", textToAppend2, (err) => {
//   if (err) {
//     console.log("Error: " + err.message);
//   } else {
//     fs.readFile("./test.txt", "utf-8", (err, text) => {
//       if (err) {
//         console.log("Error: " + err.message);
//       } else {
//         console.log(text);
//       }
//     });
//   }
// });
// console.log("appending in file");

/** deleting file */
fs.writeFile("fileToRemove.txt", "This file will be removed soon", (err) => {
  if (err) {
    console.log(`Error : ${err.message}`);
  }
});

// todelete a file
fs.unlink("./fileToRemove.txt", (err) => {
  if (err) {
    console.log(`Error: ${err.message}`);
  } else {
    console.log("File removed ");
  }
});
console.log("Removing file");
