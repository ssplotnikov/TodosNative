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
    todoElement.classList.add('todo-item')
    todoElement.setAttribute('draggable', 'true')
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
  //drag and drop
  const getNextElement = (cursorPosition, current) => {
    const currentCoord = current.getBoundingClientRect()
    const currentCenter = currentCoord.y + currentCoord.height / 2
    const next =
      cursorPosition < currentCenter ? current : current.nextElementSibling

    return next
  }
  const list = todos.childNodes
  list.forEach((todo) => {
    todo.addEventListener('dragstart', dragStart)
    todo.addEventListener('dragover', dragOver)
    todo.addEventListener('dragend', dragEnd)
  })

  function dragStart(e) {
    e.target.classList.add('selected')
  }
  function dragOver(e) {
    e.preventDefault()
    const active = todos.querySelector('.selected')
    const current = e.target
    const isMoving =
      active !== current && current.classList.contains('todo-item')
    if (!isMoving) {
      return
    }

    const nextElement = getNextElement(e.clientY, current)
    if (
      (nextElement && active === nextElement.previousElementSibling) ||
      active === nextElement
    ) {
      return
    }
    todos.insertBefore(active, nextElement)
  }
  function dragEnd(e) {
    e.target.classList.remove('selected')
  }
})
//add filter element
function filterTodo(e) {
  const todoAll = todos.childNodes
  todoAll.forEach((todo) => {
    switch (e.target.value) {
      case 'all':
        todo.style.display = 'flex'
        break
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex'
        } else {
          todo.style.display = 'none'
        }
        break
      case 'uncompleted':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'none'
        } else {
          todo.style.display = 'flex'
        }
        break
      default:
        break
    }
  })
}
