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

// const str = "adew";
// const s = "s";

// function a(str, s) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (s === str[i]) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(a(str, s));

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


