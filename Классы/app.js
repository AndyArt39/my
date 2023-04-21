import { Note } from "./Note.js"
import { NoteList } from "./NoteList.js"




let newList = new NoteList(document.getElementById('app'), 'my', [{ name: 'Дело 1' }, { name: 'Дело 2' }])

document.getElementById('action').addEventListener('click', function () {
  newList.add(prompt('Название дела'))
  newList.update()
  console.log(newList);
})
