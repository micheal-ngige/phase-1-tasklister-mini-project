
document.addEventListener("DOMContentLoaded", () => {
   // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const inputField = document.getElementById("new-task-description");
    const taskDescription = inputField.value;

    if (taskDescription.trim() !== "") { 
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      taskList.appendChild(taskItem);      
      inputField.value = "";
    }
  });
});