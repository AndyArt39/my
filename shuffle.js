let cardsCount = 10,
  cardsNumberArray = [],
  cardsArray = []

for (let i = 1; i <= cardsCount / 2; i++) {
  cardsNumberArray.push(i, i);
}

// console.log(cardsNumberArray)

for (let i = cardsNumberArray.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  [cardsNumberArray[i], cardsNumberArray[j]] = [cardsNumberArray[j], cardsNumberArray[i]];
  console.log(j)
}

// console.log(cardsNumberArray)
