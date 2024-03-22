import "../styles.css";
import { Project, Tasks } from "../classes.js";
import { projectManager } from "../classes.js";
import { createProjectCard } from "./sidebar.js";
import { projectView } from "./content.js";
import deleteIcon from "../images/deleteIcon.png";
let PROJECT_ID = 0;
// export let CURRENT_PROJECT = null;
function showNewProjectDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "addNewProjectDialog");

  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "text";
  input.name = "project-name";
  input.placeholder = "Enter project name";
  input.classList.add("project-name-input");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Cancel";
  closeButton.addEventListener("click", () => {
    dialog.close();
  });
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("project-submit");
  submitButton.textContent = `Add Project`;

  submitButton.addEventListener("click", () => {
    // CURRENT_PROJECT = createProject(input, createProjectCard, dialog);
    // console.log(CURRENT_PROJECT);
    const newProject = createProject(input, createProjectCard, dialog);
    projectManager.setCurrentProject(newProject);
    console.log(projectManager.getCurrentProject());
  });

  function createProject(input, createProjectCard, dialog) {
    const projectName = input.value;

    const project = new Project(projectName);
    project.id = PROJECT_ID++;

    //clear input fields
    input.value = "";
    createProjectCard(project.projectName);
    dialog.close();

    return project;
  }

  dialog.appendChild(input);
  dialog.appendChild(submitButton);
  dialog.appendChild(closeButton);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
  return dialog;
}
let TASK_ID = 0;
function showNewTasksDialog() {
  const dialog = document.createElement("dialog");
  dialog.setAttribute("id", "addNewTasksDialog");

  const h1 = document.createElement("h1");
  h1.textContent = "Add Task";

  const form = document.createElement("form");

  const taskNameInput = document.createElement("input");
  taskNameInput.type = "text";
  taskNameInput.name = "task-name";
  taskNameInput.placeholder = "Enter task name";
  taskNameInput.classList.add("task-name-input");

  const taskDescriptionInput = document.createElement("input");
  taskDescriptionInput.type = "text";
  taskDescriptionInput.name = "task-description";
  taskDescriptionInput.placeholder = "Enter task description";
  taskDescriptionInput.classList.add("task-description-input");

  const taskDueDateInput = document.createElement("input");
  taskDueDateInput.type = "date";
  taskDueDateInput.name = "task-due-date";
  taskDueDateInput.classList.add("task-due-date-input");

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.textContent = "Cancel";
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("task-submit");
  submitButton.textContent = "Add Task";

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let task = createTask(
      taskNameInput,
      taskDescriptionInput,
      taskDueDateInput,
      TASK_ID,
      dialog
    );
    // CURRENT_PROJECT.addTask(task);
    // console.log(CURRENT_PROJECT);
    // displayTasks(CURRENT_PROJECT);
    const currentProject = projectManager.getCurrentProject();
    currentProject.addTask(task);
    console.log(currentProject);
    displayTasks(currentProject);
  });
  function createTask(
    taskNameInput,
    taskDescriptionInput,
    taskDueDateInput,
    TASK_ID,

    dialog
  ) {
    const taskName = taskNameInput.value;
    const taskDescription = taskDescriptionInput.value;
    const taskDueDate = taskDueDateInput.value;

    let task = new Tasks(taskName, taskDescription, taskDueDate);
    task.id = TASK_ID++;
    //new code

    // Clear input fields
    taskNameInput.value = "";
    taskDescriptionInput.value = "";
    taskDueDateInput.value = "";

    dialog.close();

    return task;
  }

  form.appendChild(taskNameInput);
  form.appendChild(taskDescriptionInput);
  form.appendChild(taskDueDateInput);
  form.appendChild(submitButton);
  form.appendChild(closeButton);

  dialog.appendChild(h1);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
  return dialog;
}

export function displayTasks(project, taskContainer, container) {
  const currentProject = projectManager.getCurrentProject();
  const tasks = currentProject.getTodos();
  taskContainer = document.createElement("div");
  taskContainer.classList.add("taskContainer");
  container = document.querySelector(".content-container");

  taskContainer.innerHTML = "";
  container.innerHTML = ``;
  projectView(project.projectName);

  for (let task of tasks) {
    const taskElement = document.createElement("div");
    taskElement.classList.add("task");
    const taskContent = document.createElement("div");
    taskContent.classList.add("taskContent");
    const taskName = document.createElement("h2");
    taskName.textContent = task.taskName;
    taskContent.appendChild(taskName);

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.taskDescription;
    taskContent.appendChild(taskDescription);

    const taskDueDate = document.createElement("p");
    taskDueDate.textContent = task.getFormattedDueDate();
    taskContent.appendChild(taskDueDate);
    taskElement.appendChild(taskContent);

    const img = document.createElement("div");
    img.classList.add("check-delete");
    // Create a checkbox
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.classList.add("taskCheckbox");
    taskCheckbox.addEventListener("change", () => {
      if (taskCheckbox.checked) {
        task.markAsCompleted();
        taskElement.classList.add("completed");
      } else {
        task.markAsIncomplete(); // You'll need to implement this method in your Todo class
        taskElement.classList.remove("completed");
      }
    });

    const deleteTaskImg = document.createElement("img");
    deleteTaskImg.src = deleteIcon;
    deleteTaskImg.classList.add("deleteTaskImg");

    deleteTaskImg.addEventListener("click", () => {
      const currentProject = projectManager.getCurrentProject();
      currentProject.deleteTodo(task.id);
      taskElement.remove(); // Remove the task element from the DOM
    });
    img.appendChild(taskCheckbox);
    img.appendChild(deleteTaskImg);
    taskElement.appendChild(img);

    taskContainer.appendChild(taskElement);
    container.appendChild(taskContainer);
  }
}

export { showNewProjectDialog, showNewTasksDialog };
