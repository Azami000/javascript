// 1. 1 sekundiin daraa Hello world gesen text ogoh Promise iin response bich

// const doPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Hello world");
//   }, 1000);
// });
// doPromise.then((response) => console.log(response));

// 2. 1 sec tutam counter gesen huwisagchiig 1eer ahiulj hewle

// let counter = 0;
// setInterval(() => {
//   const doPromise = new Promise((resolve) => {
//     counter++;
//     resolve("Counter");
//     if (counter === 10) {
//       clearInterval(counter);
//     }
//   });
//   doPromise.then((response) => console.log(response));
// }, 1000);

// 3.  2 sec tutamd des daraallan step1, step2,step3 gsn text hewle

// let steps = ["Step 1", "Step 2", "Step 3"];
// let i = 0;

// const intervalId = setInterval(() => {
//   if (i< steps.length) {
//     console.log(steps[index]);
//     i++;
//   } else {
//     clearInterval(intervalId);
//   }
// }, 2000);

// setTimeout(() => {
//   const promise = new Promise((resolve) => {
//     resolve(step1);
//   }, 2000);

//   promise.then((response) => console.log(response));
// }, 2000);

// // 4. "something went wrong!" gesen error iig hewle

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["html", "css", "react"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("something went wrong!");
    }
  }, 2000);
});
console.log(promise.then((response) => console.log(response)));

// 5. 1 sec tutamd nums.n utguudiig 1 1 eer num

// let sum = 0;
// const nums = [1, 2, 3, 4, 5];
// let i = 0;

// const calculate = setInterval(() => {
//   const promise = new Promise((resolve, reject) => {
//     sum += nums[i];
//     resolve(sum);
//     i++;

//     if (i === nums.length) {
//       clearInterval(calculate);
//     }
//   });
//   promise.then((response) => console.log(response));
// }, 1000);
