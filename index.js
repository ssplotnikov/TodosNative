//form
const btn = document.getElementById('btnAdd')
const input = document.getElementById('todo-input')

btn.addEventListener('click', AddTodo)

function AddTodo() {
  input.value = ''
  console.log(input.value)
}
