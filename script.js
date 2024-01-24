//will be the masterlist of all tasks
const taskTracker = [];

function addTask() {
  //declaring varibales and what knot
  const task = document.getElementById("task");
  const priority = document.getElementById("priority");
  const taskText = task.value;
  const priorityNumber = priority.value;

  // bruh you have to have a name
  if (taskText.trim() === "") {
    alert("Your task must have a title :)");
    return;
  }

  //tas object
  const taskObject = {
    text: taskText,
    priority: priorityNumber,
    completed: false,
  };
  taskTracker.push(taskObject);
  displayTasks();

  // Clear it RAHHHHH
  task.value = "";
  priority.value = "1";
}

function changeStatus(index) {
  taskTracker[index].completed = !taskTracker[index].completed;
  displayTasks();
}

function sortTasksPriority() {
  taskTracker.sort((a, b) => {
    return b.priority - a.priority;
  });

  displayTasks();
}
function sortTasksAlphabetically() {
  taskTracker.sort((a, b) => {
    return a.text > b.text;
  });

  displayTasks();
}

function sortTasksCompletion() {
  taskTracker.sort((a, b) => {
    return a.completed != b.completed;
  });

  displayTasks();
}

function displayTasks() {
  //get HTML taskList (not to be confused with tasktracker)
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  //displlay
  taskTracker.forEach((task, index) => {
    const listItem = document.createElement("li");
    const checkboxId = `checkbox_${index}`;
    listItem.innerHTML = `
    <div class = "taskRows"> 

         <input class type="checkbox" id="${checkboxId}" onchange="changeStatus(${index})" ${
      task.completed ? "checked" : ""
    } >

          <label for="${checkboxId}" class="tasks" style="text-decoration: ${
      task.completed ? "line-through" : "none"
    }
    ">${task.text}</label>
          <span class="priority"> priority : ${task.priority}</span>
    </div> 

      `;

    taskList.appendChild(listItem);
  });
}
