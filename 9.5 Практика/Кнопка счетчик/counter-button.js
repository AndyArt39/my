document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');

  let count = 0;

  function increment() {
    button.textContent = count++;
  }

  increment(); // сначала объявим функцию, чтобы добавился 0 в кнопку, а после запустим обработчик по клику
  button.addEventListener('click', increment);
  document.body.append(button);
});
