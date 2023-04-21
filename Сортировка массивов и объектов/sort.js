// Сортировка массива
let arr = [4, 6, 1, 12, 6, 8];
// let arr = ['Олеся', 'Ян', 'Аня', 'Влад', 'Ира'];

let result1 = arr.sort(function (a, b) { // У .sort должна быть колбэк функция которая должна вызываться когда надо сравнить 2 элемента в массиве
  if (a < b) return -1;
});

// console.log(result1)

// Сортировка объекта

let arrObj = [
  {
    name: 'Олеся',
    age: 18
  },
  {
    name: 'Ян',
    age: 23
  },
  {
    name: 'Аня',
    age: 20
  },
  {
    name: 'Влад',
    age: 17
  },
  {
    name: 'Ира',
    age: 16
  }
];

/*let result2 = arrObj.sort(function (a, b) {
  if (a['age'] < b['age']) return -1; // можно обращаться к свойству объекта как к элементу массива
})

console.log(result2)*/

// Функция для сортировки

/* function sortUsers(arr, prop, dir = false) { // 3 параметра: 1) массив объектов; 2) prop - свойство объекта; 3) dir (direction) - направление, по умолчанию false

  let result2 = arrObj.sort(function (a, b) {

    let dirIf = a[prop] < b[prop];

    if (dir === true) dirIf = a[prop] > b[prop];

    if (dirIf === true) return -1; // сортировать будем по prop
  });

  return result2;
} */

// А теперь сократим функцию

const sortUsers = (arr, prop, dir = false) => arr.sort((a, b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0)

console.log(sortUsers(arrObj, 'name', false))

