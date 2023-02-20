// Массивы

// 1. Напишите функцию, которая заполняет новый массив предоставленным значением

// const fill = (arraySize, value) => new Array(arraySize).fill(value);

// console.log(fill(3, "a"));

// 2. Напишите функцию, которая разворачивает массив в обратном порядке.

// const reverse = (array) => {
//   let arr2 = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     arr2.push(array[i]);
//   }
//   return arr2;
// };

// console.log(reverse([1, 2, 3]));

// 3. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

// const compact = (array) => {
//   return array.filter((value) => value);
// };

// console.log(compact([0, 1, false, 2, undefined, "", 3, null]));

// 4. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.

// const fromPairs = (array) => {
//   //   const obj = Object.fromEntries(array);
//   //   return obj;
//   array.reduce((acc, value) => {
//     if (Array.isArray(value)) {
//       acc[value[0]] = value[1];
//     }
//     return acc;
//   }, {});
// };

// console.log(
//   fromPairs([
//     ["a", 1],
//     ["b", 2],
//   ])
// );

// const acc = {
//   a: 1,
//   b: 2,
// };

// console.log((acc["a"], acc.b).split("")); // 1 2

// 5. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы

// const without = (array, ...args) => {
//   return array.filter((el) => !args.includes(el));
// };

// console.log(without([1, 2, 3, 1, 2], 1, 2));

// 6. Напишите функцию, которая убирает повторяющиеся значения

// const unique = (array) => {
//   let newArray = [];
//   for (let i = 0; i <= array.length - 1; i++) {
//     if (!newArray.includes(array[i])) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
//   return array.filter((el, id) => array.indexOf(el) === id);
// };

// console.log(unique([1, 2, 1, 2, 3]));

// 7. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны

// const isEqual = (firstArray, secondArray) => {
//   const arr = [];
//   for (let i = 0; i < firstArray.length; i++) {
//     for (let j = 0; j < secondArray.length; j++) {
//       if (firstArray[i] === secondArray[j]) {
//         arr.push(firstArray[i]);
//       }
//     }
//   }
//   const func = (array) => array.length === 4;
//   return func(arr) && func(firstArray) && func(secondArray) ? true : false;
// };

// const arr1 = [1, 2, 3, 5];
// const arr2 = [1, 2, 3, 4];

// console.log(isEqual(arr1, arr2));

// 8. Напишите функцию, которая преобразует глубокий массив в одномерный\

// const flatten = (array) => {
//   let newArray = [];
//   array.forEach((index) => {
//     if (Array.isArray(index)) {
//       newArray.push(...flatten(index));
//     } else {
//       newArray.push(index);
//     }
//   });
//   return newArray;
// };

// console.log(flatten([1, 2, [3, 4, [5]]]));

// 9. Напишите функцию, которая разделяет массив на части заданного размера.

// const chunk = (array, size) => {
//     let arr = []
//   for (let i = 0; i < array.length; i += size) {
//     arr.push(array.slice(i, i + size))
//   }
//   return arr
// };

// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

// 10. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов

// const intersection = (...array) => {
//   let arr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) arr.push(arr1[i]);
//   }
//   return arr;
// };

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [2, 3];

// console.log(intersection(arr1, arr2));

// Объекты

// 1. Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

// const isPlainObject = (element) => {
//   return (
//     typeof element === "object" && !Array.isArray(element) && element !== null
//   );
// };

// console.log(isPlainObject({ a: 1 }));

// 2. Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]

// const makePairs = (object) => {
//     return Object.keys(object).map((el) => [el, object[el]])
// };

// console.log(makePairs({ a: 1, b: 2 }))

// 3. Напишите функцию, которая возвращает новый объект без указанных значений

// const without = (object, ...args) => {
//   let obj = {};
//   let keysOfObject = Object.keys(object);
//   for (let i = 0; i < keysOfObject.length; i++) {
//     if (!args.includes(keysOfObject[i])) {
//       obj[keysOfObject[i]] = object[keysOfObject[i]];
//     }
//   }
//   return obj;
// };

// console.log(without({ a: 1, b: 2, c: 3, d: 4 }, "b", "c"));


