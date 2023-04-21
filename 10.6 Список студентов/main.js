import Student from './student.js';

// Массив студентов
const studentsList = [
  new Student('Артюхин', 'Андрей', 'Валерьевич', new Date(1978, 10, 11), 2000, 'судмех'),
  new Student('Судаков', 'Иван', 'Владимирович', new Date(1977, 5, 9), 2021, 'юридический'),
  new Student('Иванов', 'Виталий', 'Владимирович', new Date(1981, 3, 11), 2020, 'судмех')
];

const $studentsList = document.getElementById('students-list'),
  $studentsListTHAll = document.querySelectorAll('.table-students th'),
  $filterFullName = document.getElementById('filter-fullName'),
  $filterDepartment = document.getElementById('filter-department'),
  $filterStartYear = document.getElementById('filter-startyear'),
  $filterEndYear = document.getElementById('filter-endyear')

let column = 'fullName',
  columnDir = true;

// функция вывода одного студента
function getStudentItem(student) {
  const $studentTR = document.createElement('tr');
  const $fullNameTD = document.createElement('td');
  const $departmentTD = document.createElement('td');
  const $birthDateTD = document.createElement('td');
  const $beginningTrainingTD = document.createElement('td');

  $fullNameTD.textContent = student.fullName;
  $departmentTD.textContent = student.department;
  $birthDateTD.textContent = student.getBirthDate() + ' ' + student.getAge();
  $beginningTrainingTD.textContent = student.getPeriodStudy();

  $studentTR.append($fullNameTD);
  $studentTR.append($departmentTD);
  $studentTR.append($birthDateTD);
  $studentTR.append($beginningTrainingTD);

  return $studentTR;
}

// функция сортировки массива студентов
function getSortStudents(prop, dir) {
  const studentsListCopy = [...studentsList];
  return studentsListCopy.sort(function (studentA, studentB) {
    if ((!dir === false ? studentA[prop] < studentB[prop] : studentA[prop] > studentB[prop]))
      return -1;
  })
}

// функция фильтрации студентов
function getFilterStudents(arr, prop, value) {
  return arr.filter(function (student) {
    if (String(student[prop]).includes(value.trim())) return true
  })
}

// функцию отрисовки всех студентов
function renderStudentsTable() {

  $studentsList.innerHTML = '';

  let studentsListCopy = [...studentsList];

  // сортируем массив
  studentsListCopy = getSortStudents(column, columnDir);

  // фильтруем массив
  if ($filterFullName.value !== '') {
    studentsListCopy = getFilterStudents(studentsListCopy, 'fullName', $filterFullName.value)
  }

  if ($filterDepartment.value !== '') {
    studentsListCopy = getFilterStudents(studentsListCopy, 'department', $filterDepartment.value)
  }

  if ($filterStartYear.value !== '') {
    studentsListCopy = getFilterStudents(studentsListCopy, 'beginningTraining', $filterStartYear.value)
  }

  if ($filterEndYear.value !== '') {
    studentsListCopy = studentsListCopy.filter(function (student) {
      if (String(student['beginningTraining'] + 4).includes($filterEndYear.value)) return true
    })
  }

  // отрисовываем студентов
  for (const student of studentsListCopy) {
    $studentsList.append(getStudentItem(student));
  }
}

// событие сортировки 
$studentsListTHAll.forEach(element => {
  element.addEventListener('click', function () {
    column = this.dataset.column;
    columnDir = !columnDir;
    renderStudentsTable();
  })
})

// событие фильтрации
document.getElementById('filter-students').addEventListener('input', function () {
  renderStudentsTable();
})

document.getElementById('filter-students').addEventListener('submit', function(event) {
  event.preventDefault();

  event.target.reset();
  renderStudentsTable();
})

// валидация формы
function validation(form) {

  // массив с ошибками при валидации
  const arrErrorValid = [],
    $listError = document.getElementById('list-error')

  function showErrorValid(arr) { // функция отображения массива с ошибками
    for (const textError of arr) {
      const $itemError = document.createElement('li')
      $itemError.textContent = textError;
      $listError.append($itemError)
    }
  }

  // функция удаления ошибки из массива
  function removeError(input) {
    if (input.classList.contains('input-error')) {
      input.classList.remove('input-error')
      $listError.textContent = ''
    }
  }

  // функция добавления ошибки в массив
  function createError(input, text) {
    input.classList.add('input-error')
    arrErrorValid.push(text)
  }

  /* валидация будет возвращать true или false. По умолчанию валидация прошла успешно - true, 
  в противном случае false - присутствуют ошибки */
  let result = true

  removeError(document.getElementById('input-surname'))
  if (document.getElementById('input-surname').value.trim() == '') {
    createError(document.getElementById('input-surname'), 'Укажите фамилию!')
    result = false
  }

  removeError(document.getElementById('input-name'))
  if (document.getElementById('input-name').value.trim() == '') {
    createError(document.getElementById('input-name'), 'Укажите имя!')
    result = false
  }

  removeError(document.getElementById('input-department'))
  if (document.getElementById('input-department').value.trim() == '') {
    createError(document.getElementById('input-department'), 'Укажите факультет!')
    result = false
  }

  removeError(document.getElementById('input-birthDate'))
  if (document.getElementById('input-birthDate').value == '' ||
    new Date(document.getElementById('input-birthDate').value) > new Date() ||
    new Date(document.getElementById('input-birthDate').value) < new Date(1900, 0, 1)) {
    createError(document.getElementById('input-birthDate'), 'Укажите дату рождения в диапазоне от 01.01.1900 до текущей даты!')
    result = false
  }

  removeError(document.getElementById('input-beginningTraining'))
  if (document.getElementById('input-beginningTraining').value == '' ||
    document.getElementById('input-beginningTraining').value < 2000 ||
    document.getElementById('input-beginningTraining').value > new Date().getFullYear() ||
    (document.getElementById('input-beginningTraining').value ==
      new Date().getFullYear() && new Date().getMonth() < 8)) {
    createError(document.getElementById('input-beginningTraining'), 'Укажите год поступления в диапазоне от 2000-го до текущего года!')
    result = false
  }

  showErrorValid(arrErrorValid)
  return result
}

// добавим студента
document.getElementById('add-student').addEventListener('submit', function (event) {
  event.preventDefault();

  if (validation(this)) { // Если валидация проходит, то студент добавляется в массив
    studentsList.push(new Student(
      document.getElementById('input-surname').value,
      document.getElementById('input-name').value,
      document.getElementById('input-middleName').value,
      new Date(document.getElementById('input-birthDate').value),
      Number(document.getElementById('input-beginningTraining').value),
      document.getElementById('input-department').value,
    ))
    event.target.reset();
  };
  renderStudentsTable();
})

renderStudentsTable();

// Дата рождения
/*function getBirthDate(student) {
  const yyyy = student.birthDate.getFullYear();
  let mm = student.birthDate.getMonth();
  let dd = student.birthDate.getDate();
  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  return dd + '.' + mm + '.' + yyyy;
};*/

// Возраст
/*function getAge(student) {
  const today = new Date();
  let age = today.getFullYear() - student.birthDate.getFullYear();
  let mm = today.getMonth() - student.birthDate.getMonth();
  if (mm < 0 || (mm === 0 && today.getDate() < student.birthDate.getDate())) {
    age--;
  };
  return age;
};*/

// Годы обучения и курс
/*function periodStudy(student) {
  const endTraining = student.beginningTraining + 4;
  if (endTraining === new Date().getFullYear() && new Date().getMonth() < 8) {
    return student.beginningTraining + '-' + endTraining + ` (${endTraining - student.beginningTraining} курс)`;
  } if (endTraining > new Date().getFullYear() && new Date().getMonth() < 8) {
    return student.beginningTraining + '-' + endTraining + ` (${new Date().getFullYear() - student.beginningTraining} курс)`;
  } if (endTraining > new Date().getFullYear() && new Date().getMonth() >= 8) {
    return student.beginningTraining + '-' + endTraining + ` (${new Date().getFullYear() - student.beginningTraining + 1} курс)`;
  } else {
    return student.beginningTraining + '-' + endTraining + ' закончил';
  };
};*/

// for (let student of studentsList) {
//   // console.log(`${getBirthDate(student)} (${getAge(student)} лет)`);
//   console.log(student.periodStudy());
// };


// console.log(periodStudy(studentsList))

/* Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем,
как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент
с информацией о пользователе. У функции должен быть один аргумент - объект студента. */

// function getStudentItem(studentObj) {

// }

/* Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив
студентов. Функция должна использовать ранее созданную функцию создания одной записи для
студента. Цикл поможет вам создать список студентов. Каждый раз при изменении списка
студента выбудете вызывать эту функцию для отрисовки таблицы. */

// function renderStudentsTable(studentsArray) {

// }

/* Этап 5. К форме добавления студента добавьте слушатель события отправки формы,
в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте
объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы
студентов, созданную на этапе 4. */

/* Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов
на соответствующие колонки. */

/* Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для
элементов формы. */


