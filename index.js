//form
const btn = document.getElementById('btnAdd');
const input = document.getElementById('todo-input')

btn.addEventListener('click',AddTodo);

function AddTodo() {
		console.log(input.value);
		input.value = ''
}