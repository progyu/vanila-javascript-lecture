// # 1. html 생성
// 아래 배열을 사용하여 html을 생성하는 함수를 작성하라.


// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function render() {
//   let html = '';

//   todos.forEach((todo) => {
//     html +=
//       `<li id=${todo.id}>
//     <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
// </li>\n`;
// });
//   todos.forEach(function (todo) {
//     html +=
//       `<li id=${todo.id}>
//     <label><input type="checkbox" ${todo.completed ? 'checked' : ''}>${todo.content}</label>
// </li>\n`
//   });

//   return html;
// }

// console.log(render());
/*
<li id="3">
  <label><input type="checkbox">HTML</label>
</li>
<li id="2">
  <label><input type="checkbox" checked>CSS</label>
</li>
<li id="1">
  <label><input type="checkbox">Javascript</label>
</li>
 */


// # 2. 특정 프로퍼티 값 추출
// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 각 요소 중

// 해당 프로퍼티의 값만을 추출한 배열을 반환하는 함수를 작성하라.

// 단, for 문이나 Array#forEach는 사용하지 않도록 하자

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function getValues(key) { return todos.map(todo => todo[key]); }
// // function getValues(key) {
// //   return todos.map(function (todo) {
// //     return todo[key];
// //   });
// // }

// console.log(getValues('id')); // [3, 2, 1]
// console.log(getValues('content')); // [ 'HTML', 'CSS', 'Javascript' ]
// console.log(getValues('completed')); // [ false, true, false ]


// # 3. 프로퍼티 정렬

// 요소의 프로퍼티(id, content, completed)를 문자열 인수로 전달하면 todos의 요소를 정렬하는 함수를 작성하라.

// 단, todos는 변경되지 않도록 하자.

// 참고: Array.prototype.sort

// const todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function sortBy(key) {
// const copy = todos.slice();
// return copy.sort((a, b) => a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0));
// return copy.sort(function (a, b) {
//   return a[key] > b[key] ? 1 : (a[key] < b[key] ? -1 : 0);
// });
// }

// console.log(sortBy('id'));
/*
[
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false }
]
*/
// console.log(sortBy('content'));
/*
[
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/
// console.log(sortBy('completed'));
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false },
  { id: 2, content: 'CSS', completed: true }
]
*/

// # 4. 새로운 요소 추가

// 새로운 요소(예를 들어 { id: 4, content: 'Test', completed: false })를 인수로

// 전달하면 todos의 선두에 새로운 요소를 추가하는 함수를 작성하라.

// 단, Array#push는 사용하지 않도록 하자.

// let todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// function addTodo(newTodo) {
//   todos = Array.prototype.concat.apply(newTodo, todos);
//   //   // todos = [newTodo, ...todos]; //ES6
// }

// addTodo({ id: 4, content: 'Test', completed: false });

// console.log(todos);
/*
[
  { id: 4, content: 'Test', completed: false },
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
]
*/


// # 5. 특정 요소 삭제

// todos에서 삭제할 요소의 id를 인수로 전달하면 해당 요소를 삭제하는 함수를 작성하라.

let todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

function removeTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  //   todos = todos.filter(function (todo) {
  //     return todo.id !== id;
  //   });
}

removeTodo(2);

console.log(todos);
/*
[
  { id: 3, content: 'HTML', completed: false },
  { id: 1, content: 'Javascript', completed: false }
]
*/


// #6. 특정 요소의 프로퍼티 값 반전

// todos에서 대상 요소의 id를 인수로 전달하면 해당 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라.

// 단, Object.assign를 사용하도록 한다.