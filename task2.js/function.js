// 1.
// const min = (sec) => {
//   const min = parseInt(sec / 60);

//   return min;
// };
// const sec = 98;
// const hariu = min(sec);
// console.log(hariu);

// 2.

// const totalSec = (min, sec) => {
//   const totalSec = min * 60 + sec;

//   return totalSec;
// };

// const sec = 88;
// const min = 857;
// const result = totalSec(min, sec);
// console.log(result);

// 3.
// const pri = (a, b, c) => {
//   const pri = a + b + c;

//   return pri;
// };
// const a = 15;
// const b = 15;
// const c = 16;

// const result = pri(a, b, c);
// console.log(result);

// 4.
// const num = (numberA, numberB, numberC) => {
//   if (numberA > numberB) {
//     return "osno";
//     if (numberB > numberC) {
//     } else {
//       return "osohgui";
//     }
//   }
// };

// const numberA = 50;
// const numberB = 40;
// const numberC = 60;

// const result = num(numberA, numberB, numberC);
// console.log(result);

// 5.

// const inti = (a,b,c,d,e,)=>{
//     const inti = (parseInt(a+b+c+d+e))

//     return
// }
// const A = 1;
// const B = 3;
// const C = 5;
// const D = 7;
// const E = 8.7;

// const friuts = ["apple", "banana", "cherry"];
// const friut = [];

// friuts.forEach = (el, index) => {

// };
// console.log(friut);

// 1. array iin elementuudiin niilber oldog function

// const array = [22, 4452, 2456, 9887];
// const sum = 0;
// array.forEach((x) => {
//   sum += x;
// });
// console.log(sum);

// 1. tus buriin kv g olj array butsaa function ashiglana.

// const numbers = [1, 2, 3, 4, 5];

// const number = numbers.map((item) => item * item);

// console.log(number);

// 2. too tus buriin 20%tai tentseh utgiiig oort ni nemj array butsaa

// const price = [100, 200, 300, 400];

// const pars = price.map((item) => item + item * 0.2);

// console.log(pars);

// 3. too tus buriin 10%iig hongololtiig olj arr butsaa

// const prices = [100, 200, 300, 400];

// const pars = prices.map((item) => item - item / 10);
// console.log(pars);

// 4. 3iin too heddeh index deer bgaag ol

// const numbers = [1, 2, 3, 4, 5];

// const three = numbers.find((item) => item === 3);
// console.log(three);

// 5. 3 aas busad toonuudiig awah

// const three = numbers.find((item) => item != 3);
// console.log(three);

// 6. sondgoi toonuudiig ol

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const odd = numbers.filter((item) => item % 2);
// console.log(odd);

// 7. J usgeer ehelsen nersiig olj butsaa

// const names = ["John", "Jane", "James", "Alice", "Bob"];

// const ner = names.filter((item) => item[0] === "J");
// console.log(ner);

// 8. 345aas baga bolon ih bolon baga toonuudiig yalgaj awch 2 array butsaa

// const prices = [12, 344, 200, 323, 411, 405, 20, 40, 504, 993];

// const isMore = prices.filter((item) => item > 345);
// const isLess = prices.filter((item) => item < 345);
// console.log(isMore);
// console.log(isLess);

// 9. 7 usegtei stringiig ol

// const string = ["apple", "banana", "cherry", "blueberry", "date"];

// const seven = string.find((item) => item[7] === "");
// console.log(seven);
// 10;

// let board = "";
// const size = ["", "", "", "", "", "", "", ""];

// size.forEach((_, row) => {
//   size.forEach((_, col) => {
//     if ((row + col) % 2 === 0) {
//       board += "#";
//     } else {
//       board += "*";
//     }
//   });
//   board += "\n";
// });
// console.log(board);

// baihgui bgaa toog ol

// const nums = [8, 7, 6, 5, 4, 3, 1];

// const expectedLength = nums.length + 1;
// let expectSum = 0;
// let actualSum = 0;

// for (let i = 1; i <= expectedLenght; i++) {
//   expectSum += i;
// }
// for (let i = 0; i < nums.length; i++) {
//   actualSum += nums[i];
// }
// console.log(expectSum - actualSum);

// 7 sariin 17
// 1.uniin niilberiig garga

// const items = [
//   { name: "Item1", price: 30 },
//   { name: "Item2", price: 20 },
//   { name: "Item3", price: 50 },
// ];

// const price = items.reduce((total, sum) => total + sum.price, 0);

// console.log(price);

// 2. buh authoruudiig avaad 1 array hadgalaad garga

// const books = [
//   { title: "Book1", author: "Author1" },
//   { title: "Book2", author: "Author2" },
//   { title: "Book3", author: "Author3" },
// ];

// const author = books.map((item) => item.author);
// console.log(author);

// // 3. bob gsn nertei objectiig ol

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const na = users.find((users) => users.name === "Bob");
// console.log(na);

// 7sariin 16
// 1. ner bolon nasiig tus tusad ni array hadgal

// const arr = [
//   ["Bob", 25],
//   ["Alice", 30],
//   [54, "John"],
// ];

// const names = [];
// const ages = [];

// arr.forEach((person) => {
//   person.forEach((item) => {
//     if (typeof item === "sting") {
//       names.push(item);
//     } else {
//       ages.push(item);
//     }
//   });
// });
// console.log({ names, ages });

// // 7sariin 18
// // 1. objectoos duriin keyiig ni function parametreer damjuulahad utgiig avdag bolgoh.

// const book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   year: 1960,
// };

// const getValue = (key) => book[key];

// console.log(getValue);

// const sales=[
//   {product:"Apple",quantity:10},
//   {product:"Apple",quantity:7},
//   {product:"Banana",quantity:5},
//   {product:"Banana",quantity:3},
// ];

// 3. hun tus buriin ovog neriig ni ashiglaad fullname iig ni hevle

// const people = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Emily", lastName: "Jones" },
// ];

// const fullname = people.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );

// console.log(fullname);

// 4. duriin id aar ni completed iig update hiih function bich

// const tasks= [
//   {id:1,description:"Do Laundry",completed:false},
//   {id:2,description:"Clean Dishes",completed:false},
//   {id:3,description:"Buy groceries",completed:false},
// ];

// 7 sariin 19

// 1;

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };

// const drama = `${movie.title} ${movie.director} ${movie.year}`;
// console.log(drama);

// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969,
// };

// const song = `${album.title} ${album.artist} ${album.releaseYear}`;
// console.log(song);

// const album = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
// };

// const song = `${album.title} ${album.artist} ${album.releaseYear} ${album.genre}`;
// console.log(song);

//  bodlogo 2 Salary 50000 buyu tentsuu

// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];

// const names = employees
//   .filter((el) => el.salary >= 50000)
//   .map(({ name }) => name);
// console.log(names);

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];

// const getProduct = products
//   .filter(({ price }) => price >= 1000)
//   .map(({ name }) => name);

// console.log(getProduct);

// title ni type ni number baival ter objectiig ol

// const books = [
//   { title: "1984", author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];

// const number = books
//   .filter((title) => typeof item.title === "number")
//   .map((author) => author);

// console.log(number);

// / bodlogo 3
// Price 10 aas ih baigaa baraanii nerig hevle. Hervee baihgui bol not found gej hevle. Ternary operator ashiglana gedeg bodlogo shig
// Price 150 aas ih iig

// const gadgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];

// const prices = () => {
//   const newPrice = gadgets
//     .filter(({ price }) => price > 150)
//     .map(({ name }) => name);

//   return newPrice.length ? newPrice : "not found";
// };
// console.log(prices);

// Price 2 ih buyu tentsuu

// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 },
// ];

// const morePrices = groceries
//   .filter(({ price }) => price >= 2)
//   .map(({ name }) => name);

// return;

const authors = [
  { firstName: "Mark", lastName: "Twain" },
  { firstName: "Ernest", lastName: "Hemingway" },
  { firstName: "Jane", lastName: "Austen" },
];

const fullName = authors.filter(
  ({ fullName, lastName }) => `${firstName} ${lastName}`
);

console.log(fullName);
