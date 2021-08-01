//form
const btn = document.getElementById('btnAdd')
const input = document.getElementById('todo-input')

btn.addEventListener('click', AddTodo)

function AddTodo() {
  if (input.value) {
    for (i = 0; i < arr.length; i++) {
      ul.append((li.innerHTML = input.value))
    }
    input.value = ''
  }
}

const ul = document.createElement('ul')
const li = document.createElement('li')
const contblock = document.querySelector('#content-todo')
li.innerHTML = 'Test'
contblock.append(ul)

ul.append(li)
