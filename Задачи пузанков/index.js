// 1 Валюта

// const input = [
//   ["usd", "buy", 10000],
//   ["usd", "sell", 5000],
//   ["gbp", "buy", 9000],
//   ["eur", "sell", 7000],
//   ["uah", "buy", 10000],
//   ["usd", "sell", 25000],
//   ["uah", "sell", 20000],
// ];

// const output = {
//   usd: [10000, 30000],
//   gbp: [9000, 0],
//   eur: [0, 7000],
//   uah: [10000, 0],
// };

// const objMoney = (input) => {
//   return input.reduce((acc, el) => {
//     let [currency, type, amount] = el;
//     if (!acc[currency]) {
//       //   el[1] === "buy" ? (acc[el[0]] = [el[2], 0]) : (acc[el[0]] = [0, el[2]]);
//       acc[currency] = [0, 0];
//     }
//     // else {
//     //   el[1] === "buy"
//     //     ? (acc[el[0]] = [acc[el[0]][0] + el[2], acc[el[0]][1]])
//     //     : (acc[el[0]] = [acc[el[0]][0], acc[el[0]][1] + el[2]]);
//     // }
//     acc[currency][type === "buy" ? 0 : 1] += amount;
//     return acc;
//   }, {});
// };

// console.log(objMoney(input));

// 2 Банкомат
// 5. Available notes 100, 50, 20 10

// const iWantToGet = (ammount) => {
//   const availableMoney = [100, 50, 20, 10];

//   let sum = 0;
//   let index = 0;
//   const res = [];

//   while (index < availableMoney.length) {
//     if (sum + availableMoney[index] <= ammount) {
//       sum += availableMoney[index];
//       res.push(availableMoney[index]);
//     } else {
//       index++;
//     }
//   }

//   return res;
// };

// console.log(iWantToGet(100));

// 3 Найти сумму 2 чисел в массиве чтобы было равно таргету

// const sumOfTwo = (array, target) => {
//   // O(n^2) сложность

//   //   const res = [];

//   //   for (let i = 0; i < array.length; i++) {
//   //     for (let j = i + 1; j < array.length; j++) {
//   //       array[i] + array[j] === target ? res.push(i, j) : null;
//   //     }
//   //   }

//   //   return res;

//   // O(n) сложность

//   const obj = {};

//   array.forEach((value, i) => {
//     if (!obj[value]) {
//       obj[value] = i;
//     }
//   });

//   for(let i = 0; i < array.length; i++) {
//     const diff = target - array[i]

//     if(obj[diff] && obj[diff] !== i){
//         return [i, obj[diff]]
//     }
//   }

//   return []
// };

// console.log(sumOfTwo([2, 7, 11, 15], 17));

// 4 Вернуть количство уникальных чисел в массиве

// const arr1 = [1, 1, 2];

// const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];

// // Solution1: Time complexity O(n^2) because nums.splice is O(n)
// const removeDuplicates = (nums) => {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1);
//       i--;
//     }
//   }

//   return nums.length;
// };

// console.log(removeDuplicates(arr1));

// 5 Найти непарное число

// const input = [4, 1, 2, 42, 1, 2, 4];

// const singleNumber1 = (nums) => {
//   const uniqNums = Array.from(new Set(nums));

//   const sum = (acc, el) => acc + el;

//   const sum1 = nums.reduce(sum);
//   const sum2 = uniqNums.reduce(sum);

//   return sum2 * 2 - sum1;
// };

// console.log(singleNumber1(input));

// 6 Найти максимальное расстояние до ближайшего соседа в кинотеатре

// 7 Отсортировать масссив рандомно

// let input = [1,2,3,4,5,6,7,8,9,10];

// const shuffle = (arr) => {
//     const res = []
//     for (let i = 0; i < arr.length; i++) {
//         res.push(Math.floor(Math.random * (i + 1)))
//     }

//     return res
// }

// console.log(shuffle(input));

// const pageNumbers = [22, 15, 13, 28, 19, 20, 15, 12, 15, 12];

// const data = [
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
//   { id: 1, name: "Elon" },
//   { id: 2, name: "Mark" },
//   { id: 3, name: "John" },
//   { id: 4, name: "Bill" },
//   { id: 5, name: "Kyle" },
//   { id: 6, name: "Tom" },
//   { id: 7, name: "Jack" },
// ];

// const denPedicHuinyZadal = (data, pageNumbers) => {
//   let page = 1;

//   return result = data.map((item, index) => {
//     const newItem = { ...item, page };
//     if (index >= pageNumbers[page - 1]) {
//       page++;
//     }
//     return newItem;
//   });
// };

// console.log(denPedicHuinyZadal(data, pageNumbers));

// Задача с осбеса мока 1zy2badc

// const arr = [
//   { value: "abcd", order: 4, expired: false },
//   { value: "qwer", order: 2, expired: true },
//   { value: "xyz1", order: 1, expired: false },
//   { value: "abx2", order: 3, expired: false },
// ];

// const changeFunc = (arr) => {
//   const newArr = arr
//     .filter(({ expired }) => !expired)
//     .sort((a, b) => a.order - b.order)
//     .map(({ value }) => value.split("").reverse())
//     .flat();

//   return Array.from(new Set(newArr)).join("");
// };

// console.log(changeFunc(arr));

// Нахождение дублей

// const arr = [1, 2, 3, 4, 3, 2, 5, 6]; // [2, 3]

// const doubleFind = (arr) => {
//   const res = [];

//   const obj = arr.reduce((acc, el) => {
//     !acc[el] ? (acc[el] = 1) : acc[el]++;

//     return acc;
//   }, {});

//   Object.keys(obj).forEach((el) => {
//     if (obj[el] !== 1) res.push(Number(el));
//   });

//   return res;

// //   const obj = {};

// //   return arr.reduce((acc, el) => {
// //     !obj[el] ? (obj[el] = 1) : obj[el]++;

// //     if (obj[el] !== 1) acc.push(Number(el));

// //     return acc.sort();
// //   }, []);
// };

// console.log(doubleFind(arr));

// Карирование

// const carriedSum = (a, b) => {
//   //   return carriedSum(c) + x;

//   if (!b) {
//     return function calc(c) {
//       if (!c) return calc;
//       return a + c;
//     };
//   }
// };

// console.log(carriedSum(3)(7)); // 7

// задача на овощи и имена

// const data = [
//   ["Помидоры", "Аня", "Женя"],
//   ["Огурцы", "Аня", "Женя"],
//   ["Рис", "Аня", "Иван", "Саша"],
//   ["Лосось", "Саша"],
// ];

// const objProducts = (data) => {
//   return data.reduce((acc, el) => {
//     const product = el[0];

//     for (let i = 1; i < el.length; i++) {
//       !acc[el[i]] ? (acc[el[i]] = [product]) : acc[el[i]].push(el[i]);
//     }
//     return acc;
//   }, {});
// };

// console.log(objProducts(data));
