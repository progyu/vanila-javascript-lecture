let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $ckAll = document.querySelector('#ck-complete-all');
const $delBtn = document.querySelector('.btn');
const $nav = document.querySelector('.nav');
let navState = 'all';

function countCompletedTodos() {
  document.querySelector('.completed-todos').innerText = todos.filter(todo => todo.completed).length;
}

function countUncompletedTodos() {
  document.querySelector('.active-todos').innerText = todos.filter(todo => !todo.completed).length;
}


function render(todosServer) {
  todos = [...todosServer];
  const _todos = todos.filter((todo) => {
    if (navState === 'active') return !todo.completed;
    if (navState === 'completed') return todo.completed;
    return true;
  });

  let html = '';
  _todos.forEach(({ id, content, completed }) => {
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

function getTodo() {
  fetch('http://localhost:9000/todos')
    .then(res => res.json())
    .then((todosServer) => {
      render(todosServer);
    })
    .catch(console.error);
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

$nav.addEventListener('click', (e) => {
  [...$nav.children].forEach((navItem) => {
    navItem.classList.remove('active');
  });
  e.target.classList.add('active');

  navState = e.target.id;
  render();
});


window.onload = function () {
  getTodo();
};
