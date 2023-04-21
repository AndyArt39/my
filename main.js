//------------------------------------------Дама---

// let cards = ['2', 'Король', 'Туз', '5', 'Дама', 'Король', '6'];

// console.log('Ищем Даму в колоде...')

// let found = false;

// for (card of cards) {
//   console.log(`Из колоды вытянута карта ${card}`);
//   if (card === 'Дама') {
//     found = true;
//     break;
//   }
// }

// console.log(found ? 'Мы нашли Даму' : 'В колоде дам нет :(');

//------------------------------------------Рейтинг студентов---

// let rating = ['Коля', 'Оля', 'Валя', 'Петя', 'Толя'];

// console.log('Рейтинг студентов:');

// for(let i in rating) {
//   console.log(`${parseInt(i) + 1} место: ${rating[i]}`);
// }

//------------------------------------------Рок-н-ролл---

// let styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');

// let n = styles.length % 2;

// let i = Math.floor(styles.length / 2);
// if (n === 1) {
//   styles[i] = 'Классика';
// }

// console.log(styles.shift());

// styles.unshift('Рэп', 'Регги');

// console.log(styles);

//------------------------------------------Функции. Туз---

// function findCard(cards, wantedCard = 'Туз') {
//   console.log('Ищем в колоде карту ' + wantedCard);

//   let found = false;

//   for (let card of cards) {
//     console.log(`Из колоды вытянута карта ${card}`);
//     if (card === wantedCard) {
//       found = true;
//       break;
//     }
//   }

//   console.log(found ?
//     `Мы нашли карту ${wantedCard}` :
//     `В колоде нет карты ${wantedCard} :(`);
// }

// let myCards = ['2', 'Король', 'Туз', '8', '7', 'Король', '6'];

// //Ищем туза в колоде
// findCard(myCards);
// //Ищем 5 в колоде
// findCard(myCards, '5');

//------------------------------------------Перевернутая строка---

// function reverseString(str) {
//   let string = '';

//   for(let i = str.length - 1; i >=0; --i) {
//     string += str[i];
//   }
//   console.log(string);
//   return string;
// }

// reverseString('апоЖ');

//--------------------------------------------------

// let i = 10;
// for(; i > 0;) {
//   console.log('i= ' + i--);
// }

//------------------------------------------Случайный массив---

// function randomArray(count, n, m) {
//   let arrey = [];

// for (let i = 0; i <= count - 1; ++i) {
//   let x = (Math.floor(Math.random() * (Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m));
//   arrey.push(x);
// }
// console.log(arrey);
// }

// randomArray(10, 10, 100); // вывести массив из 10-ти случайных чисел от 10 до 100
// randomArray(2, 5, -2); // вывести массив из 2-х случайных чисел от 1 до 5

//------------------------------------------Танк---

// function moveTank(roadMines) {
//   let lives = 0;
//   // for (let i in roadMines)
//   for (let i = 0; i < roadMines.length; i++) {
//     if (roadMines[i] === false) {
//       console.log(`танк переместился на ${(i) + 1}`);
//     } else {
//       lives += 1;
//       if (lives === 1) {
//         console.log('танк повреждён');
//         console.log(`танк переместился на ${(i) + 1}`);
//       } else {
//         console.log(`танк переместился на ${(i) + 1}`);
//         console.log('танк уничтожен');
//         break;
//       }
//     }
//   }
// }
// moveTank([false, true, false, false, false, false, true, false, false, false]);

//------------------------------------------Календарь---

// function januaryDays(firstWeekDay) {
//   let month = [];
//   let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

//   for (let i = 1; i <= 31; ++i) {
//     month.push(i);
//   }

//   for (let date of month) {
//     let day = (week.indexOf(firstWeekDay) + date - 1) % 7;
//     console.log(`${date} января, ${week[day]}`);
//   }
// }

// выполнение кода внутри функции
// januaryDays('понедельник'); // вывести все дни недели января, если 1-я января - понедельник
// januaryDays('среда'); // вывести все дни недели января, если 1-я января - среда
// januaryDays('воскресенье'); // вывести все дни недели января, если 1-я января - воскресенье

//---undefined и null---

// let arrey = [1, 2, 3, false, null, undefined];

// console.log(arrey[4]);

//------------------------------------------Чёрный список email---

/*function filter(generalList, blacklist) {
  let whitelist = [];
  for (let i of generalList) {
  if (blacklist.includes(i)) {
    continue;
  } else {
    whitelist.push(i);
  }
  }
  console.log(whitelist);
  return whitelist;
}

filter(["a", "b", "c", "d", "e", "f"], ["b", "e"]);
filter(
  ["andy@mail.ru", "andy@gmail.com", "andy@list.ru", "andy@yandex.ru", "andy@bk.ru", "andy@me.com"],
  ["andy@me.com", "andy@gmail.com"]
);*/

//------------------------------------------Скидка---

/*function calculate(total, numberOfProducts, promoCode) {
  if (promoCode === "ДАРИМ300") {
  total -= 300;
  }
  if (total < 0) {
  total = 0;
  }
  if (numberOfProducts >= 10) {
  total -= total * 0.05;
  }
  if (total > 50000) {
  total -= (total - 50000) * 0.2;
  }
  if (total >= 20000 && promoCode === "СКИДКА15") {
  total -= total * 0.15;
  }
  console.log(total);
  return total;
}

calculate(60000, 12, "СКИДКА15");*/

//------------------------------------------Сколько мне лет---
/*
let me = {
  birthDate: { year: 1978, month: 11, day: 11 },
  getAge: function () {
  let now = new Date();
  let born = new Date(
    this.birthDate.year,
    this.birthDate.month,
    this.birthDate.day
  );
  let diffInMilliseconds = now.getTime() - born.getTime();
  return Math.floor(diffInMilliseconds / 1000 / 60 / 60 / 24 / 365.25);
  }
};
console.log(me.getAge()); // сейчас мне 29
*/

//------------------------------------------Методы в объектах и ключевое слово this---
/*
const person = {
  userName: "Марк",
  age: 30,
  isMarried: false,
  sayHi (name) {
  console.log(`Привет ${name}! Меня зовут ${this.userName}.`);
  }
};

person.sayHi('Юрий');

for (const key in person) {
  // console.log(key);
  console.log(key, ':', person[key]);
}
*/

//------------------------------------------Операции над объектами---
//------------------------------------------оператор Spread---

/*
let motherBoard = {
  usbPortCount: 8,
  chipset: 'AMD X570',
  socket: 'AM3/AM4',
};

let cpu = {
  coreCount: 8,
  cpuManufacturer: 'AMD',
  socket: 'AM4',
};

let videoCard = {
  videoCardModel: 'NVidia GeForce GTX 1060',
  videoMemory: 4096,
};

let ram = {
  ramType: 'DDR4',
  ramVolume: 8192,
  ramFrequency: 3200,
};

let computer = {
  price: 100000,
  ...motherBoard,
  ...cpu,
  ...videoCard,
  ...ram,
};
// console.log(computer);

let computerWithAssign = Object.assign(
  {
  price: 500000
  },
  motherBoard, cpu, videoCard, ram
);
*/
/* console.log(computerWithAssign);

computerWithAssign.price = 100000;

console.log(Object.entries(computer));*/

//----------------------------------------Объекты и циклы---

/*
let values = Object.values(computer);

let keys = Object.keys(computer);

let entries = Object.entries(computer);

console.log('VALUES\n');

for (let value of values) {
  console.log(value);
}

console.log('\n\nKEYS\n');

for (let key of keys) {
  console.log(`${key}: ${computer[key]}`);
}

console.log('\n\nENTRIES\n');

for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

console.log('\n\nENTRIES WITH DESTRUCTURING\n');

for (let [key, value] of entries) {
  console.log(`${key}: ${value}`);
}
*/

//-------------------------------------------Массив объектов---
/*
let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
];
// console.log(objects[0])
// for (let obj of objects) {
// console.log(Object.entries(obj));
// }

function filter(objects, key, value) {
  let result = [];
  for (let obj of objects) {
  if (Object.values(obj)[Object.keys(obj).indexOf(key)] === value) {
    result.push(obj);
  }
  }
  console.log(result);
}

filter(objects, 'name', 'Пётр');
*/

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]

// while(number.length){
//   // На каждой итерации цикла массив "худеет" на один элемент
//   console.log(`Another one bites the dust: ${number.pop()}`)
// }

const middle = number.splice(4, 1)
// console.log(middle)
console.log(number)

number.splice(4, 0, 5, 6)
// console.log(number)

number.splice(6, 0, 7)
// console.log(number)

// const numberReverse = number.reverse()
// console.log(numberReverse)

number.push(10, 11)
// console.log(number)

number.sort()
// console.log(number)

number.sort((a, b) => a - b)
// console.log(number)

number.slice(3)
// console.log(number.slice(3,5))

// number.lastIndexOf(0)
// console.log(number.lastIndexOf(9))

const students = [
  { name: 'Василий', age: 18 },
  { name: 'Геннадий', age: 23 },
  { name: 'Андрей', age: 17 },
  { name: 'Тимофей', age: 29 },
  { name: 'Иннокентий', age: 17 }
]

let student = students.findIndex(student => student.name === 'Василий' && student.age === 18)

// student = students.every(student => student.age < 29)

// student = students.some(student => student.age > 18)

// student = students.filter(student => student.name !== 'Андрей')

// student = students.map(student => student.name)

console.log(student)

const cardItems = [
  { name: 'Гречка, 500г', price: 50, quantity: 3 },
  { name: 'Сок яблочный', price: 100, quantity: 1 },
  { name: 'Перфоратор', price: 8000, quantity: 2 }
]

const totalCost = cardItems.reduce(((total, item) => total + item.price * item.quantity), 0)
const quantitys = cardItems.reduce(((total, item) => total + item.quantity), 0)

// console.log(`Количество продуктов: ${quantitys} шт.
// Общая стоимость ${totalCost} рублей`);

/*students.forEach((student, index) => {
  console.log(`Студент № ${index + 1}: ${student.name}`)
})*/

const string = `
Тиунов Тимофей  Сергеевич,  системный архитектор
Иванов Иван Иванович , frontend-разработчик
  `

let arr = string.split('\n')

let arrNew = arr.filter(line => line.trim().length > 0)

let str = arrNew.toString()

let st1 = str.split(',')

st1.map(a => a.trim())//???

// console.log(arr)
// console.log(arrNew)
// console.log(str)
// console.log(st1)
