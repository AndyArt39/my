function hello() {
  console.log('hello');
}

function world() {
  console.log('world');
}

function myName() {
  console.log('Моё имя: Андрей');
}

function myAge() {
  console.log('Мне: 18');
}

async function jump() {
  // задержка качинается
  await new Promise((resolve, reject) => setTimeout(resolve, 4000))
  // задержка завершается
  console.log('Прыжок');
}

async function fly() {
  // задержка качинается
  await new Promise((resolve, reject) => setTimeout(resolve, 3000))
  // задержка завершается
  await jump()
  console.log('Лечу');
}

async function age() {
  // задержка качинается
  await new Promise((resolve, reject) => setTimeout(resolve, 4000))
  // задержка завершается
  return 20
}

// обязательно указываем await перед асинхронной функцией при присваивании
// и когда асинхронная функция указывается в качестве аргумента другой функции
let x = await age()
console.log(x);

hello()
world()
myName()
fly()
myAge()

