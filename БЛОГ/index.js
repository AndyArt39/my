// асинхронная функция для получения данных с сервера gorest.co.in
async function getData() {
  // запрос на получение данных, где сервер говорит, что данные можно получить
  let res = await fetch('https://gorest.co.in/public/v1/posts')
  // в следующем запросе мы получаем данные
  return await res.json()
}

// сделаем список из полученных данных
let list = await getData()

// сделаем функцию для создания списка
function createList(data) {
  let $ul = document.createElement('ul')
  for (const item of data) {
    let $li = document.createElement('li')
    let $a = document.createElement('a')
    $a.textContent = item.title
    // т.к. $a является ссылкой, то сошлёмся на href="post.html?post_id="
    $a.href = "post.html?post_id=" + item.id

    $li.append($a)
    $ul.append($li)
  }

  document.body.append($ul)
}

createList(list.data)

