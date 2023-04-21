const users = [
  {
    fio: 'Иванова Алена Игоревна',
    login: 'alena_21',
    age: 15,
  },
  {
    fio: 'Третьяков Евгений Иванович',
    login: 'evg',
    age: 21,
  },
  {
    fio: 'Ираклиевич Татьяна Петровна',
    login: 'tanay',
    age: 24,
  },
  {
    fio: 'Фёдоров Евгений Александрович',
    login: 'fedorov',
    age: 21,
  },
  {
    fio: 'Быстрый Евгений Иванович',
    login: 'bistriy',
    age: 21,
  },
  {
    fio: 'Иванова Алёна Сергеевна',
    login: 'Alenas222',
    age: 15,
  },
  {
    fio: 'Петров Иван Александрович',
    login: 'petIv',
    age: 17,
  },
  {
    fio: 'Воронов Иван Иванович',
    login: 'ivan_23',
    age: 17,
  },
]

// let newList = []

// for (const user of users) {
//   if (user.fio.includes('Иван')) newList.push(user)
// }

// let newList2 = []
// for (const user of newList) {
//   if (String(user.age).includes('17')) newList2.push(user)
// }

function filter(arr, prop, value) {
  let result = [],
    usersCopy = [...arr]
  for (const item of usersCopy) {
    if (String(item[prop]).includes(value)) result.push(item)
  }
  return result
}

function render(arr) {
  const list = document.querySelector('.users-list')
  list.innerHTML = ''

  const fioVal = document.getElementById('inp-fio').value,
    ageVal = document.getElementById('inp-age').value

  let newArr = [...arr]
  if (fioVal !== '') newArr = filter(newArr, 'fio', fioVal)
  console.log(newArr)
  if (ageVal !== '') newArr = filter(newArr, 'age', ageVal)

  for (const user of newArr) {
    const li = document.createElement('li')
    li.textContent = user.fio + ', возраст: ' + user.age + ' лет'
    list.append(li)
  }
}

document.getElementById('filter-form').addEventListener('input', function () {
  // event.preventDefault()
  render(users)
})

render(users)
