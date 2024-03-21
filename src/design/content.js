import "../styles.css";
import { showNewTasksDialog } from "./dialog";
const contentContainer = document.createElement("div");
contentContainer.classList.add("content-container");

export const mainContent = () => {
  const initialContent = document.createElement("div");
  initialContent.classList.add("initialContent");

  const welcomeContent = document.createElement("div");
  welcomeContent.classList.add("welcome-content");
  welcomeContent.textContent = `create a new project by clicking the + button or select an existing one to start adding your tasks`;

  initialContent.appendChild(welcomeContent);

  contentContainer.appendChild(initialContent);
  document.body.appendChild(contentContainer);
};

export const projectView = (project) => {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("projectContainer");

  const projectTitle = document.createElement("h1");
  projectTitle.textContent = project;
  projectTitle.classList.add("contentProjectTitle");

  projectContainer.appendChild(projectTitle);

  const addTaskButton = document.createElement("button");
  addTaskButton.textContent = "Add Task";
  addTaskButton.classList.add("addTaskButton");
  addTaskButton.addEventListener("click", showNewTasksDialog);

  projectContainer.appendChild(addTaskButton);
  contentContainer.appendChild(projectContainer);
};

export const renderMainContent = () => {
  mainContent();
};
