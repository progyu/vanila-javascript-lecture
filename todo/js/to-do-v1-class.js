class Todos {
  constructor(todos = []) {
    this.todos = todos;
    this.$todos = document.querySelector('.todos');
    this.$inputTodo = document.querySelector('.input-todo');
    this.$ckAll = document.querySelector('#ck-complete-all');
    this.$delBtn = document.querySelector('.btn');

    this.$inputTodo.onkeyup = this.addTodo.bind(this);
    this.$todos.onclick = this.removeTodo.bind(this);
    this.$todos.onchange = this.completeTodo.bind(this);
    this.$ckAll.onchange = this.completeAll.bind(this);
    this.$delBtn.onclick = this.clearTodo.bind(this);
  }

  countCompletedTodos() {
    document.querySelector('.completed-todos').innerText = this.todos.filter(todo => todo.completed).length;
  }

  countUncompletedTodos() {
    document.querySelector('.active-todos').innerText = this.todos.filter(todo => !todo.completed).length;
  }

  render() {
    let html = '';
    this.todos.forEach(({ id, content, completed }) => {
      html += `<li id="${id}" class="todo-item">
      <input class="custom-checkbox" type="checkbox" id="ck-${id}" ${completed ? 'checked' : ''}>
      <label for="ck-${id}">${content}</label>
      <i class="remove-todo far fa-times-circle"></i>
      </li>`;
    });

    this.$todos.innerHTML = html;
    this.countCompletedTodos();
    this.countUncompletedTodos();
  }

  generateId() {
    return this.todos.length ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
  }

  addTodo(e) {
    const content = this.$inputTodo.value.trim();
    if (content === '' || e.keyCode !== 13) return;
    this.todos = [{ id: this.generateId(), content, completed: false }, ...this.todos];
    this.$inputTodo.value = '';
    this.render();
  }

  removeTodo(e) {
    if (!e.target.classList.contains('remove-todo')) return;
    this.todos = this.todos.filter(todo => todo.id !== +e.target.parentNode.id);
    this.render();
  }

  completeTodo(e) {
    const id = +e.target.parentNode.id;
    this.todos = this.todos.map(todo => (todo.id === id ? Object.assign({}, todo, { completed: !todo.completed }) : todo));
    this.render();
  }

  completeAll() {
    if (this.$ckAll.checked) this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: true }));
    else this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: false }));
    this.render();
  }

  clearTodo() {
    this.todos = this.todos.filter(todo => todo.completed === false);
    this.render();
  }
}

const todoList = new Todos();
todoList.render();
