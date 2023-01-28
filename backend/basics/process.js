// console.log(process.pid);
// console.log(process.versions.node);
console.log(process.argv);
// const [, , firsname, lastname] = process.argv;
// console.log(firsname);
// console.log(lastname);
process.argv.forEach((item) => console.log(item));
