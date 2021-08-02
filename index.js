//form
const form = document.getElementById('form')
const input = document.getElementById('input')
//todos
const todos = document.getElementById('todos')
const filter = document.getElementById('filter')
filter.addEventListener('change', filterTodo)
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
//add filter element
function filterTodo(e) {
  const todoAll = todos.childNodes
  todoAll.forEach((todoAll) => {
    if ((todoAll.nodeName === 'LI')) {
      switch (e.target.value) {
        case 'all':
          todoAll.style.display = 'flex'
          break
        case 'completed':
          if (todoAll.classList.contains('completed')) {
            todoAll.style.display = 'flex'
          } else {
            todoAll.style.display = 'none'
          }
          break
        case 'uncompleted':
          if (todoAll.classList.contains('completed')) {
            todoAll.style.display = 'none'
          } else {
            todoAll.style.display = 'flex'
          }
          break
        default:
          break
      }
    }
  })
}
