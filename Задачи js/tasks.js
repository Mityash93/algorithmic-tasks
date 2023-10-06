// const array = [1, 10, 8, 2];

// арифметика в массиве
// const array = [1, 5, 8, 2];

// const func = (arr) => {
//     let sum = 0;
//     for (let ar of arr) {
//         sum += ar
//     }
//     return sum
// }

// 1 способ

// const sum = array.reduce((acc, next) => {
//     console.log(acc, next)
//     return acc + next;
// })

// console.log(sum);

// 2 способ

// let sum = 0;

// for (let i = 0; i < array.length; i ++){
//     sum += array[i]
// }

// console.log(sum);

// макс или мин в массиве

// 1 способ

// let max = 0;

// for (let i = 0; i < array.length; i ++){
//     if (max < array[i]){
//         max = array[i]
//     }
// }

// 2 способ

// const arr = [1, 2, 4, 3, 2, 4, 5];

// const func = (arr) => {
//   let max = 0;
//   let min = 1;
//   for (let ar of arr) {
//     ar > max ? (max = ar) : null;
//     ar < min ? (min = ar) : null;
//   }
//   return { max, min };
// };

// const { max, min } = func(arr);

// console.log(max, min);

// const max = array.reduce((acc, next) => Math.max(acc, next))

// console.log(max);

// сортировка ( x1, x2 от большего к меньшему )

// const sort = array.sort((x1, x2) => x1 - x2);

// console.log(sort);

// развернуть массив

// const reverse = array.reverse()

// const array2 = [];

// for (let i = array.length - 1; i >= 0; i--){
//     array2.push(array[i]);
// }

// console.log(array2);

// определить true or false in the array

// const array = ["", null, 7, "hi"];

// const arr = [];

// for (let i = 0; i < array.length; i++) {
//     if (!!array[i]) {
//         arr.push(array[i])
//     }
// }

// console.log(arr);

// Палиндром

// const palindrom = string => {
//     string.toLowerCase()
//     return string === [...string].reverse().join('')
// }
// console.log(palindrom('abba'));

// сумма в массиве, если там есть вложенные массивы

// const arr = [[1, 3, [4, 6]], [5], [8, 5]];

// 1 способ (просто через flat)

// const sum = arr.flat(Infinity).reduce((acc, next) => acc + next);

// 2 способ (если нет метода flat, то напишем функцию, которая повторяет функционал flat)

// const flat = arr => {
//     let arrNew = [];

//     arr.forEach((index) => {
//         if (Array.isArray(index)){
//             // arrNew = arrNew.concat(flat(index))
//             // если es6
//             arrNew = [ ...arrNew, ...flat(index) ]
//         } else {
//             arrNew.push(index)
//         }
//     })

//     return arrNew
// }

// const sum = flat(arr).reduce((acc, next) => acc + next);

// console.log(sum);

// Асинхронность, scope, event loop

// 1 способ с var (область видимости у var функциональный и сначала исполняется синронный код, потом асинхронный. При итерации в блоке не будет создаваться i и выведется когда итерации все пройдут, поэтому в консоле будет 10)

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// 2 способ с let (При каждой итерации внутри блока будет создаваться i и поэтому будет выводится от 0 до 10)

// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0)
// }

// 3 способ обойти var (setTimeout может принимать 3 аргумент и туда можно поставить i)

// for (var i = 0; i < 10; i++) {
//     setTimeout((i) => {
//         console.log(i);
//     }, 0, i)
// }

// Задача на eventLoop (сначала выполняется синхронный код, промисы это микрозадачи потом макрозадачи: setTimeout )

// console.log(1);

// const a = new Promise((resolve, reject) => resolve(console.log(2))); // это синхронный код

// a.then(res => console.log(3));

// setTimeout(() => {
//     console.log(4);
// })

// console.log(5);

// const resolve = fetch(url)
// const response = resolve.then(response => response.json())
// const post = response.then(post => console.log(post))

// JSON.parse(JSON.stringify(c))

// const text2 = 'you know nothing you Snow know';

// function countUniqChars(str){

//  let box = str[0];
//  let count = 0;

//   for(let i = 0; i < str.length; i++){
//        for(let j = 0; j < box.length; i++ ){

//         if(box[j] != str[i]){
//         box += str[i];
//         console.log(box);
//         count += 1;

//          }
//       }
//     }
//   return count;
// }

// function unique(arr) {
//     let result = [];
//     for(let i of arr) {
//     if(result.includes(i)) {
//     continue
//     } else {
//     result.push(i)
//     }
//     }
//     return result
//     }

//     let strings = ["собака", "кот", "кот", "он",
//     "я"];

//     console.log(unique(strings))

// const countUniqueChars = str => [...str]
//   .reduce((acc, n) => (acc.includes(n) || acc.push(n), acc), [])
//   .length;

//   console.log(countUniqueChars('you know nothing you Snow know'));

// const array = (arr) => {

//     let uniq = [];
//     // const newArr = [...arr]
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < i; j++)
//         if (arr[j] === arr[i]) {
//             uniq.push(arr[j])
//         }
//     }

//     console.log(uniq);

// let result = [];
// arr.forEach((i) => {
//     if (i === arr[i + 1]){
//         result.push(i)
//     }
// })
// // for (let i = 0; i < arr.length; i++){
// //     if (i === arr[i]) {
// //         result.push(arr[i])
// //     }

// return result
// }

// array(5, 6, 7, 6)

// console.log(result);

// [...string].reverse().join('')

// function climbDay(leftToGo, amountOfDays) {
//   const newLeftToGo = leftToGo - 50;
//   if (newLeftToGo <= 0) {
//     return amountOfDays + 1;
//   }
//   return climbDay(newLeftToGo + 30, amountOfDays + 1);
// }

// console.log(climbDay(100, 0));

// function counter(persons) {
//   if (persons < 2) {
//     return 0;
//   }
//   return persons - 1 + counter(persons - 1);
// }

// console.log(counter(10));

// function deleteDubl(string) {
//   const arr = string.split(",");
//   const result = [];
//   arr.forEach((i) => {
//     if (!result.includes(i)) {
//       result.push(i);
//     }
//   });
//   return result.join(",");
// }
// console.log(deleteDubl("кошка,собака,лошадь,корова,кошка"));

//   !result.includes(i) ? result.push(i) : null);
//   return result.join(",");

//   })  (let i = 0; i < string.length; i++) {
//     !result.includes(string[i]) ? result.push(string[i]) : null;
//   if(result.indexOf(str[i]) == -1)
//   result.push(str[i]);

// class Man extends React.Component {

//     state = {
//         visible: true,
//     }

//     toggle = () => {
//         // this.setState({
//         //     visible: !this.state.visible
//         // })

//         this.setState (state => {
//             return {
//                 visible: !state.visible
//             }
//         })
//     }

//     render () {
//         return (
//             <>
//             <button onClick={this.toggle} ></button>
//             </>
//         )
//     }
// }

// const m = new Man ({
//     name: 'dima',
//     age: 28,
// })

// const jsx = m.render()

// componentDidUpdate ( prevProps, prevState ) {

// }

// shouldComponentUpdate ( nextProps, nextState ) {
//     return nextProps !== this.props || nextState !== this.state
// }

// const arr = [ 1, 2, 3, 4 ];

// let max = 0;

// for (let i = 0; i < arr.length; i++){
//     if (max > arr[i])
//         max = arr[i]

// }

// console.log(max)

// function uniq(string) {
//     for (let i = 0; i < array.length; i++) {
//         const char = arr[i];
//         if (arr.indexOf(char) !== i) {
//             return false
//         }
//     }
//     return true
// }

// function a (arr) {
//     const arr2 = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             const repeat = a(arr[i]);
//             for (let j = 0; j < arr[i].length; i++) {
//                 arr2.push(reapeat[j])
//             }
//         } else {
//             arr2.push(arr[i])
//         }
//     }

//     return arr2
// }

// function name(string) {
//     return string.split('')
// }

// console.log(name('abv'));

// const fib = n => {
//     let prev = 0, next = 1;
//     for(let i = 0; i < n; i++){
//       let temp = next;
//       next = prev + next;
//       prev = temp;
//     }

//     return prev;
//   }

// console.log(fib(5));

/**
 * Что не так с кодом?
 * Кнопка красного цвета по условиям state.clicked >= 5
 */
// export default class Button extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         clicked: 0,
//         isRed: false
//       };
//     }

//     render() {
//       return (
//         <button
//           onClick={this.onClick.bind(this)}
//           style={{
//             background: this.state.isRed ? 'red' : ``
//           }}
//         >
//           Clicked {this.state.clicked}
//         </button>
//       );
//     }

//     onClick() {
//       this.setState(
//         {
//           clicked: this.state.clicked + 1
//         },
//         () => {
//           if (this.state.clicked >= 5) {
//             this.setState({
//               isRed: true
//             });
//           }
//         }
//       );
//     }
//    }

// const obj = {
//     name: 'dima',
//     age: 28,
// }

// Object.keys(obj).forEach((key) => console.log(obj[key]))

// const arr = [1,2,3];
// const arr2 = [1,2,3];

// Array.prototype.next = function f() {
//     return true
// }

// const a = arr.next()
// const b = arr2.next()

// console.log(a, b);

// fetch(url)
//   .then((responce) => responce.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// const b = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//   } catch (err) {
//     console.log(err);
//   }
// };

// const a = fetch(url1);
// const b = fetch(url2);

// Promise.all([a, b]).then(res => Promise.all(res.map(res => res.json()))).then(data => console.log(data))

// function CreateIncriment() {
//   let count = 0;
//   function incr() {
//     count++;
//   }
//   let mes = `Mas ${count}`;
//   function log() {
//     console.log(mes);
//   }
//   return [incr, log];
// }

// const [incr, log] = CreateIncriment();
// incr();
// incr();
// log();

// var longestCommonPrefix = function (strs) {

//   for (let i = 0; i <= strs[0].length - 1; i++) {
//     for (let j = 1; j < strs.length; j++) {
//         // console.log(strs[j][i]);
//       if (strs[0][i] !== strs[j][i]) {
//         return strs[0].slice(0, i);
//       }
//     }
//   }

//   for (let k = 0; k < arr.length; k++) {
//     for (let l = k + 1; l < arr.length; l++) {
//       // console.log(arr[k], arr[l]);
//       if (arr[k] === arr[l]) {
//         arr2.push(arr[k]);
//       }
//     }
//   }
//   return arr2.join("");
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// const users = [
//   {
//     name: "dima",
//     age: 20,
//   },
//   {
//     name: "Aenis",
//     age: 30,
//   },
//   {
//     name: "kam",
//     age: 25,
//   },
// ];

// users.sort((el1, el2) => {
//     if (el1.name < el2.name) return -1
//     if (el1.name === el2.name) return 0
//     if (el1.name > el2.name) return 1
// });

// console.log(users);

// const arr = [1,3,5,4]

// const arr2 = arr.map((el, i, arr) => arr[arr.length - 1 - i])

// console.log(arr2);

// const arr = [0, "", 4, false, undefined];

// const a = (arr) => {
//   const arr1 = [];
//   arr.forEach((el) => arr1.push(Boolean(el)));
//   return arr1;
// };

// console.log(a(arr));

// const a = "abc";
// const b = a.length; // Создается wrapper, boxing типа обьекта new String(a), примитивы нельзя изменять

// console.log(b);

// type ArrType = {
//     name: String,
//     age: Number,
//     id: string
// }

// const arr: Array<ArrType> = [
//     {name: "dima", age: 29, id: "1"},
//     {name: "kam", age: 21, id: "2"},
//     {name: "den", age: 28, id: "3"}
// ]

// const change = <T>(arr: Array<T>, key: keyof T) => {
//     return arr.map((el) => {
//         return d{
//             key: el[key]
//         }
//     })
// }

// console.log(change(arr, "age"));

// Уникальность в массиве

// const arr = [1, 2, 2, 3, 4, 4];

// const arr2 = [...new Set(arr)]

// console.log(arr2);

// let count = 0;

// const a = () => {
//     return count++;
// };

// console.log(a());
// console.log(a());
// console.log(a());
