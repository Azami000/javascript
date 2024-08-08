// const numbers = [1, 2, 3, 4];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// 2. maximum Element

// const numbers = [1, 2, 3, 4];
// let max = 0;
// for (let i = 0; i < numbers.length; i++) {
//   max = numbers[i];
// }
// console.log(max);

// 3. reverse Array

// const numbers = [1, 2, 3, 4];
// let reverse = [];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   reverse.push(numbers[i]);
// }
// console.log(reverse);

// 4.even elements

// const numbers = [1, 2, 3, 4];
// let even = 0;
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// 5. remove duplicATES

// const numbers = [1, 2, 2, 3, 4, 4];
// const uniqueArray = [];
// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (!uniqueArray.includes(numbers[i])) {
//     uniqueArray.push(numbers[i]);
//   }
// }
// console.log(uniqueArray);

// 6. Find n number index n=6

// const numbers = [1, 2, 2, 3, 4, 4, 30, 4, 6, 33];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   if (numbers[i] === 6) {
//     console.log(i);
//   }
// }

// 7. Multiple of Element

// const numbers = [1, 2, 2, 3, 4, 4, 30, 4, 6, 33];
// let mult = 1;
// for (let i = 1; i <= numbers.length - 1; i++) {
//   mult = mult * numbers[i];
// }
// console.log(mult);

// const arr = [1, 2, 234, 123, 556, 123, 9, 19, 976];
// const arr1 = [99, 123, 544, 998];

// 1. ugugdsun massiviin niilberiig olj butsaa

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 2.ugugdsun massiviin dundjiig olj butsaa

// let dund = 0;
// for (let i = 0; i < arr.length; i++) {
//   dund = parseInt(arr[i] / 2);
// }
// console.log(dund);

// 3.ugugdsun massiviin hamgiin ih toog olj butsaa

// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   max = arr[i];
// }
// console.log(max);

// 4. ugugdsun String.n urwuug butsaa(Hello->olleH)

// const reverse = "hello";
// let re = "";
// for (let i = reverse.length - 1; i >= 0; i--) {
//   re += reverse[i];
// }
// console.log(re);

// 5. ugugdsunstring.n temdegt bur dawhardajoroogui esehiig shalga

// const a = "check if all chars are unique";
// const uniqueArray = [];
// for (let i = 0; i <= a.length - 1; i++) {
//   if (!uniqueArray.includes(a[i])) {
//     uniqueArray.push(a[i]);
//   }
// }
// console.log(uniqueArray);

// 6.ugugdsun 2 massiviin ogtloltsliig olj butsaa.

// let ogt = [];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr[i] == arr1[j]) {
//       ogt.push(arr[i]);
//       break;
//     }
//   }

//   //   if (ogt.length >= 1) {
//   //     break;
//   //   }
// }

// console.log(ogt);

// 7. ugugdsun n too hurtel buh tegsh toog hewle

// let even = 0;
// for (let i = 1; i <= arr.lenght; i++) {
//   if (i % 2 == 0) {
//     console.log(even);
//   }
// }

// 8. ugugdsunn too ondortei piramid '*' ashiglan hewle.

// const n = 5;
// const mid = Math.floor((2 * n - 1) / 2);

// for (let row = 0; row < n; row++) {
//   let line = "";
//   for (let col = 0; col < 2 * n - 1; col++) {
//     if (col >= mid - row && col <= mid + row) {
//       line += "*";
//     } else {
//       line += " ";
//     }
//   }
//   console.log(line);
// }
