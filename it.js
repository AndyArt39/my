const cardsCount = 16
let cardsNumberArray = [],
  cardsArray = [],
  firstCard = null,
  secondCard = null

function createNumbersArray(count) {
  for (let i = 1; i <= cardsCount / 2; i++) {
    cardsNumberArray.push(i, i);
  }
  return cardsNumberArray;
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {
  for (let i = cardsNumberArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardsNumberArray[i], cardsNumberArray[j]] = [cardsNumberArray[j], cardsNumberArray[i]];
  }
  return cardsNumberArray;
}

// shuffle(createNumbersArray(cardsCount))
console.log(shuffle(createNumbersArray(cardsCount)));

function startGame() {
  for (const cardNumber of shuffle(createNumbersArray(cardsCount))) {
    console.log(cardNumber)
  }
}
