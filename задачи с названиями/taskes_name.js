1; // Фиббоначи (вводишь число и тебе сумма последнего через рекурсию)
// const fibo = [1,1,2,3,5,8,13,21]

// function fibo(number) {
//   if (number < 0) return 0;
//   if (number <= 2) return 1;

//   return fibo(number - 1) + fibo(number - 2);
// }

// console.log(fibo(5));

2; //  Палиндром
// const string = 'abba' - true

// 1 способ

// function palindrom(string) {
//   string = string.toLowerCase();

//   if (string === string.split("").reverse().join("")) return true;
//   else return false;
// }

// 2 способ

// function palindrom(string) {

//     string = string.toLowerCase();

//     const newString = [];

//     for (let i = string.length - 1; i >= 0; i--) {
//         newString.push(string[i])
//     }

//     if (string === newString.join('')) return true
//     return false

// }

// 3 способ

// function palindrom (string) {
//     string = string.toLowerCase();
//     for (let i = 0; i < string.length / 2; i++) {
//         if (string[i] !== string[string.length - i - 1]) {
//             return false
//         }
//         return true
//     }
// }

// console.log(palindrom("aBbc"));

3; // сумма, произведение и тд через вызовы функций (в а приходит вызов функции two, а в b через замыкание приходит callback с 2)

// function one(callback) {
//   return callback ? callback(1) : 1;
// }
// function two(callback) {
//   return callback ? callback(2) : 2;
// }

// function plus(a) {
//   return (b) => a + b;
// }

// console.log(one(plus(two())));

4; /// Дан словарь из городов и дат выступлений рок-группы

/// Необходимо преобразовать словарь (key-value) в массив из названий городов
/// Вывод городов должен быть в хронологическом порядке
/// Города в которых концерт уже прошел нужно исключить
/// Результат ["Казань", "Питер", "Калининград"]

// const concerts = {
//     'Москва': new Date('2021-04-01'),
//     'Казань': new Date('2023-07-02'),
//     'Владивосток': new Date('2021-04-21'),
//     'Калининград': new Date('2023-07-15'),
//     'Омск': new Date('2021-04-18'),
//     'Питер': new Date('2023-07-10'),
// }

// function concertsToArray(concerts) { // O(n*log2n)
//     return Object.keys(concerts)
//         .filter(city => concerts[city] > new Date()) // O(n)
//         .sort((a, b) =>  concerts[a] - concerts[b]) // O(N*log2n)
// }

// console.log(concertsToArray(concerts));

5; // Передать в функцию массив и число и вывести чанку

// eachCons([1,2,3,4], 2) => [[1,2], [3,4]]
// eachCons([1,2,3,4], 3) => [[1,2,3], [2,3,4]]

// function eachCons(array, n) {
//   const arr = [];
//   for (let i = 0; i <= array.length - n; i++) {
//     const chunk = [];
//     for (let j = i; j < i + n; j++) {
//       chunk.push(array[j]);
//     }
//     arr.push(chunk);
//   }
//   return arr
// }

// console.log(eachCons([1, 2, 3, 4], 2));

6; // [1, 4] => [1, 2, 3, 4]

// function twoNumber(a, b) {
//   const array = [];
//   for (let i = a; i <= b; i++) {
//     array.push(i);
//   }
//   return array;
// }

// console.log(twoNumber(1, 4));

7; // Вводим строку и выводим 'sex' столько же сколько слов в строке
// 'i am dima' => 'sex sex sex'

// const changeWords = (string) => string.split(' ').map(item => item = 'sex').join(' ')

// console.log(changeWords('i am dima'));

8; // Ввести название, если в строке есть символ

// '24@' => return @
// '249&' => return &
// '67*' => return *
// '37?' => return ?

// 1 способ

// function findSymbol(string) {
//   if (string.includes("@")) return "symbol @";
//   if (string.includes("&")) return "symbol &";
//   if (string.includes("*")) return "symbol *";
//   if (string.includes("?")) return "symbol ?";
// }

// 2 способ

// function findSymbol(string) {
//   return {
//     "@": "symbol @",
//     "&": "symbol &",
//     "*": "symbol *",
//     "?": "symbol ?",
//   }[string[string.length - 1]]
// }

// console.log(findSymbol("24@"));

9; //  Есть ли одинаковые цифры в массивах и вывести эти цифры

// const arr1 = [1, 3, 5, 6, 8, 12];
// const arr2 = [1, 2, 5, 7, 9, 12];

// function general(arr1, arr2) {
//   const res = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) res.push(arr1[i]);
//   }

//   return res;
// }

// console.log(general(arr1, arr2));

10; //  Сколько раз встречается буква в строке

// const str = "adedw";
// const s = "d";

// function a(str, s) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (s === str[i]) {
//       count++;
//     }
//   }

//   return count;
// }

// var isPalindrome = function (x) {
//   const x2 = x.toString();
//   const arr = [];
//   for (let i = x2.length - 1; i >= 0; i--) {
//     arr.push(x2[i]);
//   }

//   console.log(arr);
//   if (x2 === arr.join("")) return true;
//   return false;
// };

// console.log(isPalindrome(121));

// Найти общий вес всех лементов, отсортировав цену больше 70 и количество меньше 10

// const food = [
//   { name: "d", weight: 300, price: 65, amount: 10 },
//   { name: "s", weight: 350, price: 75, amount: 11 },
//   { name: "c", weight: 340, price: 60, amount: 5 },
//   { name: "v", weight: 310, price: 76, amount: 3 },
//   { name: "w", weight: 380, price: 72, amount: 2 },
// ];

// const func = (food) => {
//   const sort = food.filter((el) => el.price > 70 && el.amount < 10);
//   return sort.reduce((acc, el) => {
//     return acc + el.weight * el.amount;
//   }, 0);
// };

// const func = (food) =>
//   food.reduce(
//     (acc, el) =>
//       el.price > 70 && el.amount < 10 ? acc + el.weight * el.amount : null,
//     0
//   );

// console.log(func(food));

// 11; Сколько раз встречается слово в массиве ({kiwi: 2, apple: 1, orange: 3})

// const fruits = ["kiwi", "apple", "orange", "kiwi", "orange", "orange", "kiwi"];

// const countFruits = (fruits) => {
//   return fruits.reduce((acc, fruit) => {
//     if (fruit === "kiwi") {
//       acc.kiwi = (acc.kiwi || 0) + 1;
//     } else if (fruit === "apple") {
//       acc.apple = (acc.apple || 0) + 1;
//     } else if (fruit === "orange") {
//       acc.orange = (acc.orange || 0) + 1;
//     }
//     return acc;
//   }, {});
// };

// const countFruits = (fruits) => {
//   const count = {};

//   fruits.forEach((f) => {
//     if (!count[f]) {
//       count[f] = 1;
//     } else {
//       count[f]++;
//     }
//   });

//   return count;
// };

// const countFruits = (fruits) => {

//   return fruits.reduce((acc, f) => {
//     if (!acc[f]) {
//         acc[f] = 1;
//     } else {
//         acc[f]++;
//     }
//     return acc
//   }, {});

// };

// console.log(countFruits(fruits));

// 12; Вывести массив из уникальных элементов ["kiwi", "apple", "orange"]

// const uniqArr = (fruits) => {
//     return fruits.reduce((acc, f) => {
//         if(!acc.includes(f)){
//             acc.push(f)
//         }
//         return acc
//     }, [])
// }

// const uniqArr = (fruits) => {
//     const unique = {}
//     fruits.forEach((f) => {
//         unique[f] = true;
//     })
//     return Object.keys(unique)
// }

// const uniqArr = (fruits) => {
//   return fruits.filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });
// };

// console.log(uniqArr(fruits));

// 13; Вывести {
//     '20': [{ name: "alex", age: 20 }, { name: "dany", age: 20 },]
//     '24': [{ name: "alex", age: 24 }]
//     '25': [{ name: "alex", age: 25 },]
// }

// const students = [
//   { name: "alex", age: 20 },
//   { name: "vasy", age: 24 },
//   { name: "dima", age: 25 },
//   { name: "dany", age: 20 },
// ];

// const sort = (students) => {
//   //   const res = {};
//   //   students.forEach((student) => {
//   //     if (!res[student.age]) {
//   //       res[student.age] = [student];
//   //     } else {
//   //       res[student.age].push(student);
//   //     }
//   //   });
//   //   return res;

//   return students.reduce((acc, student) => {
//     !acc[student.age]
//       ? (acc[student.age] = [student])
//       : acc[student.age].push(student);
//       return acc
//   }, {});
// };

// console.log(sort(students));

// 14; Вывести сумму из 2 чисел в массиве если такие есть [11; -1] или если нет то пустой массив

// const array = [2, 3, 5, -1, 2, 11, 4];
// const sum = 10;

// const findPairs = (array, sum) => {
//   const newArr = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       array[i] + array[j] === sum ? newArr.push(array[i], array[j]) : [];
//     }
//   }
//   return newArr;
// };

// console.log(findPairs(array, sum));

// 14; Вывести массив всех пицц

// const users = [
//   {
//     name: "vasy",
//     pizza: ["meet", "pepa"],
//   },
//   {
//     name: "ser",
//     pizza: ["fish"],
//   },
//   {
//     name: "irina",
//     pizza: ["cora", "rita"],
//   },
// ];

// const sortPizza = (user) => {
//     return users.reduce((acc, user) => {
//         return [...acc, ...user.pizza]
//     }, [])
// }

// console.log(sortPizza(users));

// Владилен Минин задачи

1;
// function isUnique(string) {
//     // const arr = string.split('')
// 	// const newArr = []
//     // arr.forEach((el) => {
//     //     if(!newArr.includes(el)) {
//     //         newArr.push(el)
//     //     }
//     // })
//     // if(newArr.length !== arr.length) {
//     //     return false
//     // } return true

//     // for (let i = 0; i < string.length; i++) {
//     //     const el = string[i]

//     //     if(string.indexOf(el) !== i) {
//     //         return false
//     //     }
//     // }
//     // return true

//     // return new Set(string).size === string.length
// }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abc12ABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

2;
// function flatten(array) {
//   //   return array.flat(Infinity)

//   let res = [];

//   array.forEach((arr) => {
//     if (Array.isArray(arr)) {
//       res = [...res, ...flatten(arr)];
//     } else {
//       res.push(arr);
//     }
//   });

//   return res;
// }

// console.log(flatten([[1], [[2, 3]], [[[4]]]])); // -> [1, 2, 3, 4]

3;
// function removeDupes(str) {
//     // return str.split('').reduce((acc, el) => {
//     //     if (!acc.includes(el)) {
//     //         acc.push(el)
//     //     }
//     //     return acc
//     // }, []).join('')

//     return Array.from(new Set(str)).join('')
// }

// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'

4;
// function highestFrequency(array) {
//   //   let maxFrequency = 0;
//   //   let mostElement = null;

//   //   array.reduce((acc, arr) => {
//   //     if (!acc[arr]) {
//   //       acc[arr] = 1;
//   //     } else {
//   //       acc[arr]++;
//   //     }

//   //     if(acc[arr] > maxFrequency) {
//   //         maxFrequency = acc[arr]
//   //         mostElement = arr
//   //     }

//   //     return acc

//   //   }, {});

//   //   return mostElement;

// //   const map = {};
// //   let maxFreq = 0;
// //   let maxFreqStr = array[0];

// //   for (let i = 0; i < array.length; i++) {
// //     const current = array[i];

// //     if (map[current]) {
// //       map[current]++;
// //     } else {
// //       map[current] = 1;
// //     }

// //     if (map[current] > maxFreq) {
// //       maxFreq = map[current];
// //       maxFreqStr = current;
// //     }
// //   }

// //   return maxFreqStr;
// }

// console.log(highestFrequency(["a", "b", "c", "c", "d", "e"])); // -> c
// console.log(highestFrequency(["abc", "def", "abc", "def", "abc"])); // -> abc
// console.log(highestFrequency(["abc", "def"])); // -> abc
// console.log(
//   highestFrequency([
//     "abc",
//     "abc",
//     "def",
//     "def",
//     "def",
//     "ghi",
//     "ghi",
//     "ghi",
//     "ghi",
//   ])
// ); // -> ghi

5;
// function isStringRotated(source, test) {
//     // if (source.length !== test.length) {
//     //   return false
//     // }
//     //
//     // for (let i = 0; i < source.length; i++) {
//     //   const rotate = source.slice(i, source.length) + source.slice(0, i)
//     //
//     //   if (rotate === test) {
//     //     return true
//     //   }
//     // }
//     //
//     // return false
//     return source.length === test.length && (source + source).includes(test)
//   }

// console.log(isStringRotated("javascript", "scriptjava")); // -> true
// console.log(isStringRotated("javascript", "iptjavascr")); // -> true
// console.log(isStringRotated("javascript", "java")); // -> false

6;
// function search(array, target) {
// //   let res = -1;
// //   for (let i = 0; i < array.length; i++) {
// //     if (array.indexOf(target) === i) {
// //       res = i;
// //     }
// //   }
// //   return res;

//   return array.reduce((acc, el, index) => {
//     if (array.indexOf(target) === index) {
//         acc = index
//     }
//     return acc
//   }, -1)
// }

// console.log(search([1, 3, 6, 13, 17], 13)); // -> 3
// console.log(search([1, 3, 6, 13, 17], 12)); // -> -1

7;
function arraySubset(source, subset) {
    for (let i = 0; i < subset.length; i++) {
        if (source.includes(subset[i])) {
           source.splice(source.indexOf(subset[i]), 1);
        //    delete source[source.indexOf(subset[i])];
        } else {
          return false; 
        }
      }
      return true;
}

console.log(arraySubset([2, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([2, 1, 1, 3], [1, 2, 3])); // -> true
console.log(arraySubset([1, 1, 1, 3], [1, 3, 3])); // -> false
console.log(arraySubset([1, 2], [1, 2, 3])); // -> false
