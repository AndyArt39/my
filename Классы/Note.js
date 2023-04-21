import { NoteList } from "./NoteList.js"

export class Note { // Класс для создания дела

  _name = '' // создаем 'мост'-переменную для set и get name
  _done = ''

  constructor(container, name = '', done = false) {
    this.item = document.createElement('div') // создание блока для текста дела и кнопок
    this.buttonGroup = document.createElement('div')
    this.nameSpan = document.createElement('span')
    this.doneButton = document.createElement('button')
    this.deleteButton = document.createElement('button')

    this.item.classList.add( // стилизация блока с делом и кнопками
      'list-group-item',
      'd-flex',
      'justify-content-between',
      'align-items-center'
    )

    this.buttonGroup.classList.add("btn-group", "btn-group-sm");
    this.doneButton.classList.add("btn", "btn-success", "me-2");
    this.doneButton.textContent = "Готово";
    this.deleteButton.classList.add("btn", "btn-danger");
    this.deleteButton.textContent = "Удалить";

    this.doneButton.addEventListener('click', () => { // стрелочная функция делается для того, чтобы был доступен this класса, а не кнопки
      this.done = !this.done  // при нажатии на кнопку "Готово" будет меняться значение _done с false на true
    })

    this.deleteButton.addEventListener('click', () => {
      if (confirm('Вы уверены?')) {
        this.delete() // вызовем метод delete() для удаления блока с делом
      }
    })

    this.buttonGroup.append(this.doneButton);
    this.buttonGroup.append(this.deleteButton);
    this.item.append(this.nameSpan);
    this.item.append(this.buttonGroup);

    this.name = name // при смене this.name будет вызван метод name(value) и в this.nameSpan.textContent будет меняться
    this.done = done // при смене this.done будет вызван метод done(value)
    this.container = container

    if (container instanceof NoteList) {
      container.list.append(this.item)
    } else {
      container.append(this.item)
    }
  }

  set name(value) {
    this._name = value
    this.nameSpan.textContent = value // отображение текста дела
  }

  get name() {
    return this._name
  }

  set done(value) {
    this._done = value

    if (value) {
      this.item.classList.add('list-group-item-success')
    } else {
      this.item.classList.remove('list-group-item-success')
    }

    if(this.container instanceof NoteList){
      this.container.save()
    }
  }

  get done() {
    return this._done
  }

  delete() { // метод удаления блока с делом
    this.item.remove()

    if(this.container instanceof NoteList){
      this.container.remove(this)
    }
    console.log(this.container);
  }
}
