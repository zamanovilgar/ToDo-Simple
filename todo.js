const todoObj = {
  name: "TodoApp",
  data: [],
  complete: [],

  addTodo: function (text) {
    this.data.push(text);
  },
  completedTodo: function (todoIndex) {
    this.complete.push(this.data[todoIndex]);
    const newData = this.data.filter((item, index) => index !== todoIndex);
    this.data = newData;
  },
  renderTodo: function (listEl) {
    listEl.innerHTML = this.data.map((item) => `<div>- ${item}</div>`).join("");
  },
};
const todoInput = document.querySelector("#todoInput");
const todoSend = document.querySelector("#todoSend");
const todoList = document.querySelector("#todoList");

todoSend.addEventListener("click", function () {
  const value = todoInput.value;
  todoInput.value = "";
  todoObj.addTodo(value);

  todoObj.renderTodo(todoList);
});
