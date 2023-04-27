function validation(form) {

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-label').remove()
      parent.classList.remove('error')
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement('label')

    errorLabel.classList.add('error-label')
    errorLabel.textContent = text

    parent.classList.add('error')

    parent.append(errorLabel)
  }


  let result = true;

  const allInputs = form.querySelectorAll('input');

  for (const input of allInputs) {

    removeError(input)

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        removeError(input)
        createError(input, `Минимальное кол-во символов: ${input.dataset.minLength}`)
        result = false
      }
    }

    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength) {
        removeError(input)
        createError(input, `Максимальное кол-во символов: ${input.dataset.maxLength}`)
        result = false
      }
    }

    if (input.dataset.required == "true") {
      if (input.value == "") {
        removeError(input)
        createError(input, 'Поле не заполнено!')
        result = false
      }
    }

  }

  return result
}


document.getElementById('add-form').addEventListener('submit', function (event) {
  event.preventDefault()

  if (validation(this) == true) {
    alert('Форма проверена успешно!')
  }

})
