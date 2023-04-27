function validation(form) {
  // валидация будет возвращать true или false
  let result = true; // по умолчанию валидация прошла успешно - true, в противном случае false - присутствуют ошибки

  return result;
}

document.getElementById('add-form').addEventListener('submit', function (event) {
  event.preventDefault();

  if(validation(this)){ // тоже что и validation(document.getElementById('add-form'))
    alert('Форма проверена успешно!') // studentsList.push(new Student(...
  };

})
