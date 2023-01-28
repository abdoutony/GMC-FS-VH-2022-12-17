// setTimeout(() => {
//   console.log("How are you ");
// }, 2000);
// console.log("Hi");

// setTimeout(() => {
//   console.log("first message");
//   setTimeout(() => {
//     console.log("Second message");
//     setTimeout(() => {
//       console.log("Third message");
//     }, 1000);
//   }, 1000);
// }, 1000);

// promises
// const isAuth = false;
// const pr = new Promise((resolve, reject) => {
//   if (isAuth) {
//     resolve("user authenticated");
//   } else {
//     reject("you must first login");
//   }
// });

// pr.then((data) => console.log(data)).catch((err) => console.log(err));

const printData = (data) => {
  return new Promise((resolve, reject) => {
    if (!data) {
      reject("You must provide a valid string");
    } else {
      setTimeout(() => {
        console.log(data);
        resolve("hey im inside resolve");
      }, 1000);
    }
  });
};
printData("Hi how are your")
  .then((dt) => printData("This is the second"))
  .then((dt) => printData("third message"))
  .catch((err) => console.log(err));
const printAll = async () => {
  try {
    const data = await printData("Hi first message");
    const data2 = await printData("Hi ssecond message");
    const data3 = await printData("Hi third message");
  } catch (err) {
    console.log(err);
  }
};

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const dataFetching = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};

dataFetching("https://fakestoreapi.com/products");
