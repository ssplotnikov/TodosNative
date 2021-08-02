//form
const form = document.getElementById('form')
const input = document.getElementById('input')
//todos
const todos = document.getElementById('todos')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  //create Todo
  const todoText = input.value
  if (todoText) {
    // const div = document.createElement('div')
    const todoElement = document.createElement('li')
    const todoDelete = document.createElement('button')
    todoElement.innerHTML = todoText
    todos.appendChild(todoElement)
    input.value = ''
    //completed
    todoElement.addEventListener('click', (e) => {
      e.preventDefault()
      todoElement.classList.toggle('completed')
    })
    //delete todo
    todoElement.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      todoElement.remove()
    })
  }
})
