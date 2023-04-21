// Самовызываемая анонимная функция
(function () {

  let listArray = []; //для создания базы данных
  let listName = 'list'; // 3-й параметр делаем в глобальной области!

  // создаём и возвращаем заголовок приложения
  function createAppTitle(title) {
    let appTitle = document.createElement('h2'); // создаём элемент h2
    appTitle.textContent = title; // присваиваем содержимое свойством textContent которое передаём с помощью аргумента
    return appTitle; //
  }

  // создаём и возвращаем форму для создания дела
  function createTodoItemForm() {
    let form = document.createElement('form'); // создаём элемент формы
    let input = document.createElement('input'); //создаём поле для ввода
    let buttonWrapper = document.createElement('div'); //ещё один элемент для стилизации кнопки
    let button = document.createElement('button'); //создаём кнопку

    // раставим различные атрибуты для элементов
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary'); // класс btn добавит тнопке стили из bootstrap, а btn-primary сделает её синей
    button.textContent = 'Добавить дело';

    // Блокируем кнопку когда поле для ввода пустое
    button.disabled = true;

    // Разблокируем кнопку когда поле ввода не пустое, но функция trim() уберет лишние пробелы и не позволит создать пустое поле!
    input.addEventListener('input', function () {
      if (input.value.trim() !== '') {
        button.disabled = false;
      }
    });

    // Объеденяем наши DOM элементы в единую структуру
    buttonWrapper.append(button); // кнопку помещаем в div buttonWrapper
    form.append(input); // input помещаем в форму
    form.append(buttonWrapper); // блок с кнопкой помещаем в форму

    return {
      form,
      input,
      button,
    };
  }

  // создаём и возвращаем список элементов
  function createTodoList() {
    let list = document.createElement('ul'); // создаём список
    list.classList.add('list-group'); // присваиваем класс отвечающий за стилизацию в bootstrap
    return list;
  }

  // Функция добавляет новый пункт (новое дело)
  function createTodoItem(obj) {
    let item = document.createElement('li');
    // кнопки помещаем в элемент, который красиво покажет их в одной группе
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    // устанавливаем стили для элемента списка, а также для размещения кнопок
    // в его правой части с помошью flex
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = obj.name;

    if (obj.done == true) {
      item.classList.add('list-group-item-success'); // Данный класс окрашивает поле в зеленый цвет
    };

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    doneButton.addEventListener('click', function () {
      obj.done = !obj.done; // Данная инверсия позволяет изменить статус объекта с false на true
      item.classList.toggle('list-group-item-success'); // По клику переключаем класс

      saveList(listArray, listName); //сохранение при изменении
    });
    deleteButton.addEventListener('click', function () {
      if (confirm('Вы уверены?')) { // с помощью confirm() выводится всплывающее окно с подтверждением и отменой действия
        for (let i = 0; i < listArray.length; i++) { // Индекс находим с помощью цикла счётчика
          if (listArray[i].id == obj.id) { // Если содержимое с индексом массива соответствует содержимому удаляемого объекта
            listArray.splice(i,1); // У массивов для удаления есть функция splice(индекс,1).
          };
        };
        item.remove(); // удаляем объект

        saveList(listArray, listName); //сохранение при удалении
      };
    });

    // вкладываем кнопки в отдельный элемент, чтобы они объединились в один болок
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    // приложению нужен доступ к самому элементу и кнопкам, чтобы обрабатывать события нажатия
    return {
      item,
      doneButton,
      deleteButton,
    };
  };

  // Создадим уникальный ID
  function getNewId(arr) { // Поиск максимального элемента в массиве
    let max = 0; // Максимальный элемент равен нулю
    for (const item of arr) {
      if (item.id > max) {
        max = item.id; // После выполнения этого цикла максимальный элемент будет находиться в этой переменной
      };
    };
    return max + 1; // Добавляем 1, чтобы добиться уникальности
  };

  // Функция отрисовывает главные элементы на странице браузера
  function createTodoApp(container, title = 'Список дел', myListName, defArr = []) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    listName = myListName;

    let listData = localStorage.getItem(listName); // переменная для

    if (listData !== '' && listData !== null) {
      listArray = JSON.parse(listData); //JSON.parse переводит из строки обратно в массив
    } else {
      listArray = defArr;
      saveList(listArray, listName); // делаем повторное сохранение
    };

    for (const element of listArray) {
      let todoItem = createTodoItem(element);
      todoList.append(todoItem.item);
    }

    // браузер создаёт событие submit на форме по нажатию на Enter или на кнопку создания дела
    todoItemForm.form.addEventListener('submit', function (e) {
      // эта строчка необходима, чтобы предотвратить стандартное действия браузера
      // в данном случае мы не хотим, чтобы страница перезагружалась при отправке формы
      e.preventDefault();

      // игнорируем создание элемента, если пользователь ничего не ввёл в поле
      if (!todoItemForm.input.value) {
        return;
      };

      let newObj = { // создадим объект который будет содержать в себе:
        id: getNewId(listArray), // уникальный ID
        name: todoItemForm.input.value, // содержимое формы
        done: false, // статус, по умолчанию сделаем false
      };

      let todoItem = createTodoItem(newObj);

      listArray.push(newObj); // В массив будем вкладывать наш объект

      // создаём и добавляем в список новое дело с названием из поля для ввода
      todoList.append(todoItem.item);
      // обнуляем значение в поле. чтобы не пришлось стирать его вручную
      todoItemForm.input.value = '';
      // после очищения формы опять блокируем кнопку
      todoItemForm.button.disabled = true;

      saveList(listArray, listName); // Сохранение вновь добавленного элемента
    });
  };

  // Функция для сохранения в localStorage
  function saveList(arr, key) {
    localStorage.setItem(key, JSON.stringify(arr)); //сохраняем массив в формате строки при помощи JSON.stringify
  };

  // Зарегистрируем функцию createTodoApp в глобальном объекте window, чтобы получить доступ к этой функции из других скриптов
  window.createTodoApp = createTodoApp; // для видимости в глобальной области
})();

