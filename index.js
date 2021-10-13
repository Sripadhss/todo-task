
//index.js
const todoList = [];
const todoListElement = document.querySelector("#todo-list-ul");
//to add event listner to add button
document.querySelector("#add_button").addEventListener("click", addToDo);
function keyPressTodoTextHandler(e) {
  //console.log(e);
  if (e.keyCode == 13) {
    addToDo();
  }
}

function addToDo() {
  //grab the text that is entered
  const todoText = document.querySelector("#todo_text").value;
  if (todoText == "") {
    return;
  } else {
    const todoObject = {
      id: todoList.length,
      todoText: todoText,
      isDone: false,
    };
    todoList.unshift(todoObject);
    //DISPLAY THE ADDED TASK
    displayTodos(); //call this function to display new task
  }
}

function displayTodos() {
  todoListElement.innerHTML = "";
  document.querySelector("#todo_text").value = "";
  //render list items inside the ul tag
  todoList.forEach((item) => {
    const listElement = document.createElement("li");
    listElement.innerHTML = item.todoText;
    //making delete button /icoon with font awesome
    const delBtn = document.createElement("i");
    delBtn.setAttribute("data-id", item.id);
    delBtn.classList.add("fa");
    delBtn.classList.add("fa-trash-o");
    if (item.isDone) {
      listElement.setAttribute("class", "checked");
    }
    listElement.setAttribute("data-id", item.id);

    //ADD EVENT TO LIST ITEM
    listElement.addEventListener("click", function (e) {
      const selectedID = e.target.getAttribute("data-id");
      //console.log(selectedID);
      doneToDo(selectedID);
    });

    delBtn.addEventListener("click", function (e) {
      const delId = e.target.getAttribute("data-id");
      deleteItem(delId);
    });

    todoListElement.appendChild(listElement);
    listElement.appendChild(delBtn);
  });
}

function deleteItem(delId) {
  const deleteIndex = todoList.findIndex((item) => item.id == delId);
  todoList.splice(deleteIndex, 1);
    displayTodos();

}

function doneToDo(selectedID) {
  const selectedIdIndex = todoList.findIndex((item) => item.id == selectedID);
  //console.log(todoList[selectedIdIndex]);
  if(selectedIdIndex == -1){
      return;
  }
  else{
  todoList[selectedIdIndex].isDone
    ? (todoList[selectedIdIndex].isDone = false)
    : (todoList[selectedIdIndex].isDone = true);
  //console.log(todoList[selectedIdIndex]);
  displayTodos();
}
}