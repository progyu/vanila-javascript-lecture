let todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false }
];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $ckAll = document.querySelector('#ck-complete-all');
const $delBtn = document.querySelector('.btn');

function countCompletedTodos() {
  document.querySelector('.completed-todos').innerText = todos.filter(todo => todo.completed).length;
}

function countUncompletedTodos() {
  document.querySelector('.active-todos').innerText = todos.filter(todo => !todo.completed).length;
}

function render() {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}" class="todo-item">
    <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
    <label for="ck-${id}">${content}</label>
    <i class="remove-todo far fa-times-circle"></i>
  </li>`;
  });

  $todos.innerHTML = html;
  countCompletedTodos();
  countUncompletedTodos();
}


function generateId() {
  return todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
}


$todos.onclick = (e) => {
  if (!e.target.classList.contains('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +e.target.parentNode.id);
  render();
};

$todos.onchange = (e) => {
  const id = +e.target.parentNode.id;
  todos = todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
  render();
};

$inputTodo.onkeyup = (e) => {
  const content = $inputTodo.value.trim();
  if (content === '' || e.keyCode !== 13) return;
  $inputTodo.value = '';
  todos = [{ id: generateId(), content, completed: false }, ...todos];
  render();
};

$ckAll.onchange = () => {
  if ($ckAll.checked) todos = todos.map(todo => Object.assign({}, todo, { completed: true }));
  else todos = todos.map(todo => Object.assign({}, todo, { completed: false }));
  render();
};

$delBtn.onclick = () => {
  todos = todos.filter(todo => todo.completed === false);
  render();
};

render();
countCompletedTodos();
countUncompletedTodos();
