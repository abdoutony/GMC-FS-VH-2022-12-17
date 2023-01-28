const fs = require("fs");

/**
 * reading from a directory
 */
// blocking mode
// let content = fs.readdirSync("./", "utf8");
// console.log(content);
// console.log("reading from current directory");

// async non blocking
// fs.readdir("./", "utf8", (err, content) => {
//   if (err) {
//     console.log("Error: " + err.message);
//   } else {
//     // console.log(content);
//     content.forEach((file, index) => {
//       fs.readFile(file, "utf-8", (err, text) => {
//         if (err) console.log("Error:" + err.message);
//         console.log(text);
//       });
//       console.log(`Reding file number: ${index + 1}`);
//     });
//   }
// });

/**
 * creating directory
 */

//checking if the directory already exists
// if (fs.existsSync("subdir")) {
//   console.log("Directory already exists");
// } else {
//   fs.mkdir("subdir", (err) => {
//     if (err) {
//       console.log(`Error: ${err.message}`);
//     } else {
//       console.log("directory created");
//     }
//   });
// }

// removing directory
if (fs.existsSync("subdir")) {
  fs.rmdir("subdir", (err) => {
    if (err) {
      console.log("Error" + err.message);
    } else {
      console.log("Directory deleted");
    }
  });
} else {
  console.log("No directory with such name");
}
