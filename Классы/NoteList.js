import { Note } from "./Note.js"

export class NoteList {  // Класс для создания списка

  _notes = []
  _key = null // переменная для сохранения в localStorage
  _def = [] //

  constructor(container, key = null, def = []) {
    this.container = container
    this.list = document.createElement('div')
    this.list.classList.add('list-group')

    this._key = key // key из аргумента переносим в тело функции
    this._def = def

    // this.checkEmpty() // этот метод больше не понадобится т.к. он присутствует внутри следующего метода
    this.update() // получаем данные из localStorage и помешвем их в _notes

    container.innerHTML = '' // для начала очистим контейнер
    container.append(this.list)
  }

  // Проверка списка на количество записей. Если записей нет, показываем сообщение
  checkEmpty() {
    if (this._notes.length == 0) {
      this.empty = document.createElement('div')
      this.empty.classList.add(
        'd-flex',
        'list-group-item',
        'justify-content-center',
        'align-items-center',
        'text-secondary',
        'bg-light',
        'p-5'
      )

      this.empty.textContent = 'Список пуст'
      this.list.append(this.empty)
    } else {
      if (this.empty) {
        this.empty.remove()
      }
    }
  }

  getNewId() {
    let max = 0
    for (const note of this._notes) {
      if (note.id > max) max = note.id
    }
    return max + 1
  }

  add(name, done = false) {
    let newNote = new Note(this, name, done)
    newNote.id = this.getNewId()
    this._notes.push(newNote)
    this.checkEmpty()
    this.save()
    return id
  }

  remove(value) {
    let id = value

    if (value instanceof Note) {
      id = value.id
    }

    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].id == id) {
        this._notes.splice(i, 1) // уберет из массива один элемент под индексом i
      }
    }
    this.checkEmpty()
    this.save()
  }

  save() {
    if (this._key) { // сохраняем в localStorage после проверки, если указали _key
      let saveList = []
      for (const note of this._notes) {
        saveList.push({
          id: note.id,
          name: note.name,
          done: note.done,
        })

        localStorage.setItem(this._key, JSON.stringify(saveList)) // в localStorage нельзя сохранять массив, поэтому приобразуем его в строку
      }
    }
  }

  update() { // метод по возврату данных из localStorage
    let startList = this._def // новая переменная для возврата данных из localStorage по умолчанию пустой массив если аргументом def ничего не назничили

    this._note = [] // предварительно очищаем массив
    this.list.innerHTML = '' // очищаем список

    if (this._key) { // если указан _key,
      let dataLS = localStorage.getItem(this._key) // получаем данные из localStorage если в _key что-то есть
      if (dataLS !== '' && dataLS !== null) startList = JSON.parse(dataLS)
    }

    if (startList.length > 0) {
      for (const obj of startList) {
        let newNote = new Note(this, obj.name, obj.done)
        if (obj.id) {
          newNote.id = obj.id
        } else {
          newNote.id = this.getNewId()
        }
        this._notes.push(newNote)
      }
    }

    this.save
    this.checkEmpty()
  }
}
