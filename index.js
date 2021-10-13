// creating an todolist array
const todoList = [];
const todoListElement = document.querySelector('#todo-list-ul') //declaring a variable for ul
class ToDoApp{
    constructor(todoListElement){
this.todoListElement=todoListElement;
    }
    addToDo() {
       this. todoText= document.querySelector("#todo_text").value;
      if(this.todoText==""){
           return;
       }
       else{
           this. todoObject={
               id:todoList.length,
               todoText:this.todoText,
               isDone:false
           }
           todoList.push(this.todoObject)
          this.displayToDos();
    
    
       }
       
    }
     displayToDos() {
        todoListElement.innerHTML="";
        document.querySelector("#todo_text").value="";
       
        todoList.forEach((item)=>{
            this.listElement=document.createElement("li");
            this.listElement.innerHTML=item.todoText;
           
           this.delBtn=document.createElement("i");
            this.delBtn.setAttribute("data_id",item.id)
          this. delBtn.classList.add("fa")
           this. delBtn.classList.add("fa-trash-alt")
          if(item.isDone){
                listElement.setAttribute("class","checked")
            }
           this.listElement.setAttribute("data-id",item.id)
            //Add event to list item
            this.listElement.addEventListener("click",function (e) {
                this. selectedID=e.target.getAttribute("data-id")
               //this.doneToDo()
                
            })
    
           this. delBtn.addEventListener("click",function (e) {
                this. delId=e.target.getAttribute("data_id");
               ToDoListFunction. deleteItem(this.delId);
                
            })
            todoListElement.appendChild(this.listElement);
            this.listElement.appendChild(this.delBtn)
    
        })
    }

     deleteItem(delId) {
        this.deleteIndex=todoList.findIndex((item)=> item.id==delId)
        todoList.splice(this. deleteIndex,1)  
        this.displayToDos()
        
    }
}
 

const ToDoListFunction = new ToDoApp(todoListElement);
document.querySelector("#add_button").addEventListener("click",button =>{
    ToDoListFunction.addToDo();
});

document.querySelector("#todo_text").addEventListener("keydown",function (e) { 
    
    // e is event object 
    if(e.keyCode==13){ // 13 is the enter key Code in keybroad
       ToDoListFunction. addToDo();
    }
    
});