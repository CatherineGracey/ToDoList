console.log("This is the app.js file");

var addBtn = document.querySelector("#add-btn");
var newToDoInput = document.querySelector("#new-todo-input");
var toDoList = document.querySelector("#todo-list");

var addToDo = function(){
  var todoContent = newToDoInput.value;
  var newLI = document.createElement("li");
  var newContent = document.createTextNode(todoContent);
  newLI.appendChild(newContent);
  toDoList.appendChild(newLI);
  newToDoInput.value = "";
};

addBtn.addEventListener("click", addToDo);

document.getElementById("lists").addEventListener("click", function(event){
  console.log("someone clicked on you or on your children");
  console.log(event.target);
  //console.log(this);//Shows the element the listener is attached to, not what is clicked directly
  if (event.target.tagName === "LI"){
    var toDo = event.target;
    toDo.parentNode.removeChild(toDo);
    if (event.target.className === "done"){
      toDo.className = "";
      toDoList.appendChild(toDo);
    } else {
      toDo.className = "done";
      document.getElementById("done-list").appendChild(toDo);
    }
  }
});
