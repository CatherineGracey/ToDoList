var addBtn = document.getElementById("add-btn");
var newToDoInput = document.getElementById("new-todo-input");
var toDoList = document.getElementById("todo-list");

var addToDo = function(){
  var todoContent = newToDoInput.value;
  var newLI = document.createElement("li");
  var newContent = document.createTextNode(todoContent);
  newLI.appendChild(newContent);
  toDoList.appendChild(newLI);
};

addBtn.addEventListener("click", addToDo);
