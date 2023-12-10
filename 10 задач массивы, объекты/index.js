// Массивы

// // 1. Напишите функцию, которая заполняет новый массив предоставленным значением

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

// // 3. Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.

// const compact = (array) => {
//   return array.filter((value) => value);
// };

// console.log(compact([0, 1, false, 2, undefined, "", 3, null]));

// // 4. Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое значение - ключ, второе - зачение.

// const fromPairs = (array) => {
//   //   const obj = Object.fromEntries(array);
//   //   return obj;
//   return array.reduce((acc, value) => {
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

// // 5. Напишите функцию, возвращает новый массив без предоставленных значений. Используйте примитивные типы

// const without = (array, ...args) => {
//   return array.filter((el) => !args.includes(el));
// };

// console.log(without([1, 2, 3, 1, 2], 1, 2));

// // 6. Напишите функцию, которая убирает повторяющиеся значения

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

// // 7. Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны

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

// // 8. Напишите функцию, которая преобразует глубокий массив в одномерный

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

// // 9. Напишите функцию, которая разделяет массив на части заданного размера.

// const chunk = (array, size) => {
//     let arr = []
//   for (let i = 0; i < array.length; i += size) {
//     arr.push(array.slice(i, i + size))
//   }
//   return arr
// };

// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));

// // 10. Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов

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

// // 1. Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.

// const isPlainObject = (element) => {
//   return (
//     typeof element === "object" && !Array.isArray(element) && element !== null
//   );
// };

// console.log(isPlainObject({ a: 1 }));

// // 2. Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]]

// const makePairs = (object) => {
//     return Object.keys(object).map((el) => [el, object[el]])
// };

// console.log(makePairs({ a: 1, b: 2 }))

// // 3. Напишите функцию, которая возвращает новый объект без указанных значений

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

// // 4. Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
// const isEmpty = (object) => {
//    const arr = Object.keys(object).map((el) => object[el]);
//    console.log(arr);
//    if (arr.includes('' || null || NaN || undefined) || arr.length === 0) {
//     return true
//    } return false
// };

// console.log(isEmpty({}));

// // 5. Напишите функцию, которая поверхностно сравнивает два объекта.

// const isEqual = (firstObject, secondObject) => {
//   const arr1 = Object.keys(firstObject).map((el) => firstObject[el]);
//   const arr2 = Object.keys(secondObject).map((el) => secondObject[el]);

//   const newArr = [];

//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = i; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         newArr.push(arr1[i]);
//       }
//     }
//   }
//   return newArr.length === arr1.length ? true : false;
// };

// const data = { a: 1, b: 2 };
// const data2 = { a: 1, b: 2 };

// console.log(isEqual(data, data2));




/**
Даны два массива, представляющие собой целые неотрицательные числа,
разбитые в массив по десятичным разрядам, например:
[1, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] - число 1 230 000 000 000 000 000 000
[4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] - число 4 560 000 000 000 000 000 000
Нужно написать функцию, которая примет на вход два таких массива, вычислит сумму чисел,
представленных массивами, и вернет результат в виде такого же массива, например:
[5, 7, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] - число 5 790 000 000 000 000 000 000
Числа, представленные массивами, могут быть любыми (в том числе очень большими,
содержащими тысячи разрядов = элементов массива)

Решение не должно импортировать какие-либо библиотеки.
Решение должно работать в старых версиях браузеров.
*/

const arr2 = [1, 2, 3];
const arr1 = [5, 6];

const sum = (arr1, arr2) => {
    let sum = []

    for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--) {
        console.log(arr1[i]);
            
            const newNumner1 = arr1[i]
            const newNumner2 = arr2[j] === undefined ? 0 : arr2[j]
            sum.push(newNumner1 + newNumner2)
            j = j - 1
    }

    return sum.reverse()
}

console.log(sum(arr1, arr2));




/**
 * Типизировать параметры функции так, чтобы `obj` принимал определенный тип объекта из дженерика, а `key` принимал строку, которая может быть только ключом свойства `obj`
 */
export function getProperty(obj, key) {
    return obj[key];
}



/**
 * Описать React-хук, логирующий жизненный цикл компонента
 */
export function useLifecycleLogger(): void {

    useEffect(() => {
        console.log('Component did mount');
        return function () {
            console.log('Component will unmount');
        }
    })

    console.log('Component did mount');
    console.log('Component did update');
    console.log('Component will unmount');
}



interface User {
    name: string,
    age: number,
}

const data: User[] = [{
    name: 'Вася',
    age: 40,
}, 
{
    name: 'Ваня',
    age: 50,
}];

/**
 * Описать типы для функции, опираясь на типы и данные выше.
 * При описании типов использовать дженерик для value.
 * При использовании типов для функции подставить конкретный тип.
 */

type arrStr = []

type contractType = {
    value: User[],
    count: number

}

const getUserData = async ()  => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                // ------ Контракт ------
                [
                    {
                        value: data, // данные сущности запрашиваемые из REST API, в данном случае для getUserData — User[]
                        count: 2, // Кол-во, число
                    },
                    ['Info message 1', 'Info message 2', 'Info message 3'], // массив строк
                    'SUCCESS' // значение строковое, одно из 'SUCCESS', 'GRACEFUL_ERROR', 'GENERIC_ERROR', 'NETWORK_ERROR'
                ]
                // ----------------------
            );
        }, 500)
    });
};


/**
 * Имплементировать функции, итоговый результат которых должен возвращать 13.
 * Также должно работать при перемене мест слагаемых.
 */
four(plus(nine()));


написать функцию sum которая возвращает сумму переданных аргументов  может вызываться несколько раз подряд и при вызове без аргументов долдна возвращаться сумма например sum(1)(2)(3,4)() === 10

[[1, 2], 3, 4, [{a: 1}, 5]] преобразовать в [1, 2, 3, 4, {a: 1}, 5] на js



const processOrder = (warehouse, ids, amounts) => {
    const list = [];
  
    for(var i = 0; i < ids.length; i++)
    {
        var id = ids[i];
        var amount = amounts[i];
  
        warehouseService.getAvailableAmount(warehouse, id).then((availableItemAmount) => {
          if (availableItemAmount >= amount) {
              warehouseService.reserve(itemId, warehouseId, itemAmount);
              list.push("Item " + itemId + " (amount: " + itemAmount + ") reserved");
          }
        });
    }
    return list;
  }
  
  const adapter = (warehouse, ids, amounts) => {
      return [warehouse, ids, amounts];
  }
  что не так в этом коде

  const count = (array) => {
    const countMap = array.reduce((acc, el) => {
      if (!acc[el]) {
        acc[el] = 1;
      } else {
        acc[el]++;
      }
      return acc;
    }, {});
  
    const result = Object.keys(countMap)
      .map(key => `${key}:${countMap[key]}`)
      .join(', ');
  
    return result;
  };
  
  const arr = [1, 2, 3, 4, 4];
  const result = count(arr);
  console.log(result);



  /**
Напишите программу, которая выводит на экран числа от [1,2,3,4,5, ....].
При этом вместо чисел, кратных трем, программа должна выводить слово «Fizz»,
 а вместо чисел, кратных пяти — слово «Buzz».
Если число кратно и 3, и 5, то программа должна выводить слово «FizzBuzz».
*/

{
    1: 23
    2: 34
    3: 4123
    4: 12331
}


{
    1: 23
    2: 34
    3: 4123
    4: 12331
    5: 
    6: 
    7: 
    8:
}

const fizz = (arr) => {
    const res = new Array(arr.length)

    for (let i = 0; i < arr.length; i++) {
        const char = arr[i]
        if (char % 3 === 0 && char % 5 === 0) {
            res.push("FizzBuzz")
        }
        if (char % 5 === 0) {
            res.push("Buzz")
        }
        if (char % 3 === 0) {
            res.push("Fizz")
        } 
        
        res.push(char)

    }

    return res
}

fizz(arr)


function check() {
    var a = "1", b = 0, c = "false"; 
    return a || b ? b + !!c == a : c;
}


(async () => {
    var funcs = [];
    for (var i = 0; i < 5; i++) {
      var delay = function (ms) {
        return new Promise(resolve => setTimeout(resolve, i * ms));
      };
      funcs.push(async () => {
        delay(1000);
        console.log(i);
        await delay(1000);
        console.log(i)
      });    
    }
    await funcs[1]();
  })();


  const promise1 = Promise.resolve('First');
const promise2 = Promise.resolve('Second');
const promise3 = Promise.reject('Third');
const promise4 = Promise.resolve('Fourth');
 
const runPromises = async () => {
  const res1 = await Promise.all([promise1, promise2]);
  const res2 = await Promise.all([promise3, promise4]);
  return [res1, res2];
};
 
runPromises()
  .then(res => console.log(res))
  .catch(err => console.log(err));









  import { useCallback, useState } from "react";
import Header from "./components/Header";

/**
 *
 * - Написать списочный компонент, который будет выводить с новой строки,
 *   при нажатии на кнопку "ОК", значение из input с порядковым номером.
 *   Пример:
 *       1. Текст из input
 *       2. Текст из input
 *       3. Текст из input
 *
 * - Добавить действия над записями: Удалить, Редактировать.
 *
 * - При создании компонентов описывать их интерфейс.
 *
 * - Желательно стилизовать.
 *
 */

interface ListItem {
  name: string;
}

export default function App() {
  const [list, setList] = useState<ListItem[]>([
    {
      name: "something"
    },
    {
      name: "something"
    },
    {
      name: "something"
    }
  ]);

  const deleteEl = useCallback((index: number) => {
    setList((prev) => {
      const previousArr = [...prev];
      const removed = previousArr.splice(index, 1);

      return previousArr;
    });
  }, []);

  return (
    <div>
      <Header setList={setList} />

      {list.map((item, index) => {
        return (
          <div key={`${item.name}-${index}`}>
            <p>
              {index + 1}. {item.name}
            </p>
            <button onClick={(e: any) => deleteEl(index)}>Удалить</button>
          </div>
        );
      })}
    </div>
  );
}



import { FC, useState } from "react";

interface HeaderProps {
  setList: (e: any) => void;
}

const Header: FC<HeaderProps> = ({ setList }) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
      <button
        onClick={(e: any) => setList((prev) => [...prev, { name: inputValue }])}
      >
        OK
      </button>
      <hr />
    </div>
  );
};

export default Header;


/*
Задача: реализовать примитивный стейт менеджер в основе которого лежат конечные автоматы. 
Для этого предлагается реализовать одну программную сущность "MachineManager".

MachineManager управляет конечными автоматами и предоставляет api для работы с ними.
MachineManager должен предоставлять следующий набор функций:
- transition: отправка события во все автоматы которые созданы в MachineManager
- onTransition: подписка на изменение состояния в автоматах
- getState: получение состояния автоматов
*/

// Конечный автомат для авторизации пользователя
const auth = {
  // описывает конечный набор состояний и переходов для автомата
  config: {
    IDLE: {
      LOGIN: "LOGIN_PENDING"
    },
    LOGIN_PENDING: {
      LOGIN_RESOLVE: "IDLE",
      LOGIN_REJECT: "ERROR"
    },
    ERROR: {}
  },
  // начальное состояние автомата
  initialState: "IDLE",
  // любой набор данных
  initialContext: {
    profile: null
  },
  //  (optional): чистая функция вызываемая при отправке событий (действий),
  //  обрабатывает переход из одного стояния в другое
  //  Аргументы reducer:
  //    { state, context } - текущее состояние автомата и его контекст (набор данных)
  //    { type, payload } (action) - событие вызвавшее переход
  //    config - исходный конфиг автомата, описывает конечный набор состояний и переходов для автомата
  reducer: ({ state, context }, { type, payload }, config) => {
    return {
      state: config[state][type] || state,
      context: { ...context, ...payload }
    };
  },
  // (optional): набор сайд эффектов, привязаны к определенному состоянию автомата и
  // вызываются после выполнения всех reducer
  // Аргументы эффекта:
  //    transition - отправка события во все автоматы которые созданы в MachineManager
  //    action - событие/действие которое вызвало переход в это состояние
  //    getState - функция для доступа к состоянию и контексту всех автоматов которые зарегистрированы в MachineManager
  effects: {
    LOGIN_PENDING: async ({ action, transition }) => {
      try {
        const profile = await authService.auth(
          action.payload.login,
          action.payload.password
        );

        transition({ type: "LOGIN_RESOLVE", payload: { profile } });
      } catch (err) {
        transition({ type: "LOGIN_REJECT" });
      }
    }
  }
};

const MachineManager = ({auth}) => {
  
  return {
    transition: function (action) {
      arguments[auth].reducer(auth.initialState,action)
    }
  }
} 

// Пример использования MachineManager

const manager = MachineManager({ auth }); 

manager.onTransition((prevState, nextState) => {
  console.log("[onTransition]", { prevState, nextState });
});

manager.transition({
  type: "LOGIN",
  payload: { login: "login", password: "password" }
});

console.log(manager.getState().auth);