const screen = document.getElementById("input");
const addButton = document.getElementById("addBtn");
const listItems = document.getElementById("MyUL");

addButton.addEventListener("click", addTask)
function addTask(){

let task = input.value.trim();
if(input.value === ""){
  alert("PLEASE ENTER A TASK");
}
else if (task) {
createNewElement(task);
}
}
function createNewElement(task){
const li = document.createElement("li");
  li.textContent = task;
  listItems.appendChild(li);
  li.classList.add(".listStyle");
  input.value = "";
  

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Cancel";
  li.appendChild (deleteButton);
  deleteButton.classList.add("deleteTask")

  deleteButton.addEventListener("click", function(){
    listItems.removeChild(li);
  })
};




