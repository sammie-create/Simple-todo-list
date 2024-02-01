"use strict";

//Elements
const container = document.querySelector(".container");
const inputTask = document.querySelector(".text-input");
const btnAdd = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");
const btnDel = document.querySelector(".del-btn");
console.log(taskList.innerHTML);

//Clears existing html
const clearList = () => (taskList.innerHTML = " ");
clearList();

//FUNCTIONS
const addTasks = function () {
  if (inputTask.value.trim().length === 0) {
    alert("Enter Task!!");
  } else {
    const html = `
    <div class="del-btn-wrapper">
    <li>${inputTask.value}</li>
    <button class="del-btn">&times;</button>
    </div>
    `;
    taskList.insertAdjacentHTML("beforeend", html);
  }
  inputTask.value = "";
};

//EVENT IMPLEMENTATIONS
btnAdd.addEventListener("click", function (e) {
  e.preventDefault();
  addTasks();
  saveData();
});
// inputTask.addEventListener("keypress", (e) => {
//   e.preventDefault();
//   if (e.key === "Enter") addTasks();
//   else removeEventListener("keypress");
// });

container.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.className === "del-btn") {
    e.target.parentElement.remove();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem("data");
}
showData();


//Further Things i'd like to implement
//1. when the task is done(checked) the del-btn hover background property should change color to the same as the checked symbol before the element.
