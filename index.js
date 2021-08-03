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
    const todoElement = document.createElement('li')
    todoElement.innerHTML = todoText
    todoElement.setAttribute('draggable', 'true')
    todos.appendChild(todoElement)

    //drag and drop events
    todoElement.addEventListener('dragstart', (e) => {
      // e.target.stile.opacity = 0.5
      console.log('dragStart')
    })
    todoElement.addEventListener('dragend', (e) => {
      // e.target.stile.opacity = ''
      console.log('dragEnd')
    })
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
    if (todoAll.nodeName === 'LI') {
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

//drag and drop events

// todos.childNodes.forEach((todo) => {
// todo.addEventListener('dragstart', dragStart)
// todo.addEventListener('dragend', dragEnd)
// })

// function dragStart(e) {
// e.target.stile.opacity = 0.5
// console.log('dragStart')
// }

// function dragEnd(e) {
// e.target.stile.opacity = ''
// console.log('dragEnd')
// }
