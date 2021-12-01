import _ from "lodash";
import "./style.css";

let taskCollection = [
  { description: "water plants", completed: false, index: 0 },
  { description: "do laundry", completed: false, index: 1 },
  { description: "bake cake", completed: false, index: 2 },
];

class TODO {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

// List Title
const listTitle = document.createElement("h1");
listTitle.innerHTML = `Today's To Do <span class="refresh"><img src="" width="15" class=""/></span>`;
listTitle.classList.add("list-title");

// List container
const list = document.createElement("ul");
list.id = 'taskList';

// AddBox
const addBoxContainer = document.createElement("div");
const addBox = document.createElement("input");
addBox.placeholder = `Add to your list...`;
addBox.id = "addBox";

const addBtn = document.getElementById("addBox");
addBox.addEventListener("keyup", ({ key }) => {
  if (key === "Enter" && addBox.value != "") {
    let newTodo = new TODO();
    newTodo.description = addBox.value;
    newTodo.index = taskCollection.length;
    taskCollection.push(newTodo);
    addBox.value = "";
    console.log(newTodo);
    console.log(taskCollection);
    displayList();
  }
});

addBoxContainer.appendChild(addBox);

// TODO: Get value from input.checked to add css rule

// Collection iteration
let displayList = () => {
  list.innerHTML = '';
  for (let i = 0; i < taskCollection.length; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<input type="checkbox" class="checkbox"/>${taskCollection[i].description}<span class="dots"><img src="" width="20" class=""/></span>`;
    list.appendChild(listItem);
  }
};

// Clear all button
const clearButton = document.createElement("button");
clearButton.innerText = "Clear All Completed";

const wrapper = document.getElementById("wrapper");

wrapper.appendChild(listTitle);
wrapper.appendChild(addBoxContainer);
wrapper.appendChild(list);
wrapper.appendChild(clearButton);
displayList();