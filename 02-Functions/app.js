// sayName();

// // const name= sayName();
// console.log(name);

// let name = "qurban";

// function sayName() {
//   console.log("qurban");
//   //   var name = "qurban";
//   //   return "qurban";
// }

// const sayName = function () {
//   console.log("qurban");
// }

// const sayName = (a = 0, b = 0) => {
//   console.log(a + b);
//   //   console.log(this.document);
//   //   console.log("qurban");
// };

// sayName();

// function getNumber() {
//   console.log([...arguments]);
// }

// const getNumber = (num1, num2, ...numbers) => {
//   console.log(numbers);
// };

// const getNumber = (num1, num2, ...numbers) => numbers;

// getNumber(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// let surname = "hello";

// console.log(surname.split(""));

// const arr1 = [1, 2];
// const arr2 = [[3, [3, 4]], 5];

// console.log(arr2.flat());
let students = [
  {
    id: 1,
    name: "Nurane",
    surname: "Ismayilzade",
    age: 21,
    hobbies: ["music", "walking", "watchingfilm"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "cavid" },
      { id: 4, name: "alisa" },
    ],
    loginDetail: { username: "nurana21", password: "nunu123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 88,
    salaryAZN: 144,
  },
  {
    id: 2,
    name: "Gizilgul",
    surname: "Allahverdiyeva",
    age: 20,
    hobbies: ["book", "writing code"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "babaxan" },
      { id: 4, name: "gulshen" },
    ],
    loginDetail: { username: "allahverdieva1", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 70,
    salaryAZN: 100,
  },
  {
    id: 3,
    name: "Xanim",
    surname: "Nuriyeva",
    age: 21,
    hobbies: ["book", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "hikmet" },
      { id: 4, name: "gulsen" },
    ],
    loginDetail: { username: "xanim123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 145,
  },
  {
    id: 4,
    name: "Minaya",
    surname: "Binnetova",
    age: 21,
    hobbies: ["book", "gaming", "movie", "music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "anar" },
    ],
    loginDetail: { username: "binnetova", password: "hello123" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 90,
    salaryAZN: 142,
  },
  {
    id: 5,
    name: "Sabina",
    surname: "Hatamli",
    age: 21,
    hobbies: ["shopping", "listen to music"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Mirvari" },
    ],
    loginDetail: { username: "sebine123", password: "salam123" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 81,
    salaryAZN: 146,
  },

  {
    id: 6,
    name: "Ləman",
    surname: "Şamilova",
    age: 20,
    hobbies: [
      "watching movies",
      "reading books",
      "painting",
      " walking",
      " listen to music",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "lemanshamilova", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 85.8,
    salaryAZN: 145,
  },
  {
    id: 7,
    name: "Narmin",
    surname: "Musayeva",
    age: 21,
    hobbies: ["book", "gaming", "painting", "walking"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "fidan" },
      { id: 4, name: "Irada" },
    ],
    loginDetail: {
      username: "narmin0",
      password: "narmin01",
    },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: false,
    avgPoint: 80,
    salaryAZN: 196,
  },

  {
    id: 8,
    name: "Fatima",
    surname: "Akhundzada",
    age: 20,
    hobbies: ["drawing", "sleeping"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Valida" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: false,
    avgPoint: 76,
    salaryAZN: 100,
  },
  {
    id: 9,
    name: "Elmir",
    surname: "Huseynov",
    age: 21,
    hobbies: ["book", "ice skating", "Tennis", "Karting"],
    student: true,
    teacher: [
      { id: 1, name: "Gurban" },
      { id: 2, name: "Hajar" },
      { id: 3, name: "Morad" },
      { id: 4, name: "Fikrat" },
    ],
    loginDetail: { username: "huseynovelmirr", password: "maxverstappen" },
    gender: "man",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 120,
  },
  {
    id: 10,
    name: "Fidan",
    surname: "Rehimli",
    age: 21,
    hobbies: ["book", "gaming"],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "Turan" },
    ],
    loginDetail: { username: "fidan123", password: "fidanrahimli" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 75,
    salaryAZN: 98,
  },
  {
    id: 11,
    name: "Aynur",
    surname: "Aynurova",
    age: 20,
    hobbies: ["book", "gaming"],
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
    ],
    loginDetail: { username: "aynur123", password: "salamBaku" },
    gender: "girl",
    boyfriendGirlfriend: true,
    fail: true,
    avgPoint: 81,
    salaryAZN: 120,
  },

  {
    id: 12,
    name: "Elman",
    surname: "Muradov",
    age: 20,
    hobbies: [
      "book",
      "gaming",
      "sking",
      "wrestling",
      "swiming",
      "arguing about philosophy",
      "solving sudoku",
      "hiking",
      "walking",
    ],
    student: true,
    teacher: [
      { id: 1, name: "gurban" },
      { id: 2, name: "hajar" },
      { id: 3, name: "jale" },
      { id: 4, name: "akhmed" },
    ],
    loginDetail: { username: "elman17", password: "elman12345" },
    gender: "girl",
    boyfriendGirlfriend: false,
    fail: true,
    avgPoint: 76,
    salaryAZN: 100,
  },
];

// for (let element of students) {
//   console.log(element);
// }

// for (let element in students) {
//   console.log(element);
// }

// let newStudent = students.forEach((element) => {
//   console.log(element);
// });
// let newStudent = students.map((element) => {
//   return element;
// });

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let arr2 = arr1.map((element, index) => {
//   console.log(index);
//   return element * 2;
// });

// let findedName = students.find((element) => element.fail === true);
// let filterFAil = students.filter((element) => element.fail === true);

// result = students
//   .filter((element) => element.fail === true)
//   .map((element) => element.teacher)
//   .flat()
//   .map((element) => element.name);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = arr.reduce((acc, element) => {
//   return acc + element;
// }, 100);

let result = students.sort((a, b) => a.avgPoint - b.avgPoint);
result = students.sort((a, b) => b.avgPoint - a.avgPoint);

let arr = ["z", "b", "a"];

result = students.sort((a, b) => a.name.localeCompare(b.name));

result = students.every((element) => element.avgPoint > 75);

result = students.some((element) => element.avgPoint > 75);

console.log(result, "result");

let arr1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
];

result = arr1.entries();

for (let element of result) {
  //   console.log(element);
}

const months = ["Januar", "Februar", "Mar", "April"];
const myMonths = months.with(2, "March");

// console.log(myMonths);
// console.log(result);

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3, "arr3 first time");

// let arr4 = JSON.parse(JSON.stringify(arr3));

let arr4 = structuredClone(arr3);

arr4[0] = 100;

console.log(arr3, "arr3");
console.log(arr4, "arr4");

let arr5 = [
  "gurban",
  "hajar",
  "cavid",
  "alisa",
  "gulsen",
  "babaxan",
  "gulshen",
  "mirvari",
  "fidan",
  "irada",
  "valida",
  "morad",
  "fikrat",
  "turan",
  "jale",
  "akhmed",
];

const [qurban, hajar, ...teachers] = arr5;

console.log(qurban);
console.log(hajar);
console.log(teachers);
