const todoInput = document.getElementById("todoText");
const submitTodo = document.getElementById("submitTodo");
submitTodo.addEventListener("click", addTodo);
const todosList = document.getElementById("todos_list");

function addTodo() {
  if (todoInput.value === "") {
    alert("You must write Something!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = todoInput.value;
    todosList.appendChild(li);
    todoInput.value = "";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  todosList.addEventListener("click", function (e) {
    var clickedTodo = e.target;
    if (clickedTodo.classList.contains("clicked") === false) {
      firstClick();
    } else {
      clickedTodo.style.textDecoration = "none";
      secondClick();
    }

    function firstClick() {
      clickedTodo.style.textDecoration = "line-through";
      clickedTodo.classList.add("clicked");
    }
    function secondClick() {
      clickedTodo.remove();
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    addTodo();
  }
});
