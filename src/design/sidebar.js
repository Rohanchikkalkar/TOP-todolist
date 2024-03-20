import "../styles.css";
import addProject from "../images/addIcon.png";
import deleteProject from "../images/deleteIcon.png";
import { showNewProjectDialog } from "./dialog";

// sidebar
const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

// sidebarHeader
const sidebarHeader = document.createElement("div");
sidebarHeader.classList.add("sidebarHeader");

const sidebarContainer = () => {
  const sidebarTitle = document.createElement("p");
  sidebarTitle.classList.add("sidebarTitle");
  sidebarTitle.textContent = `My Projects`;
  // add project button
  const addProjectIcon = document.createElement("img");
  addProjectIcon.classList.add("addProjectIcon");
  addProjectIcon.src = addProject;
  addProjectIcon.alt = `add project icon`;

  addProjectIcon.addEventListener("click", showNewProjectDialog);
  sidebarHeader.appendChild(sidebarTitle);
  sidebarHeader.appendChild(addProjectIcon);
  sidebar.appendChild(sidebarHeader);
  sidebar.appendChild(sidebarContent);
  document.body.appendChild(sidebar);
};

const sidebarContent = document.createElement("div");
sidebarContent.classList.add("sidebarContent");

export const createProjectCard = (projectName) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const projectNameElement = document.createElement("p");
  projectNameElement.classList.add("projectName");
  projectNameElement.textContent = projectName;

  const deleteProjectIcon = document.createElement("img");
  deleteProjectIcon.classList.add("deleteProjectIcon");
  deleteProjectIcon.src = deleteProject;
  deleteProjectIcon.alt = `delete project Icon`;

  projectCard.appendChild(projectNameElement);
  projectCard.appendChild(deleteProjectIcon);
  sidebarContent.appendChild(projectCard);

  // Add event listener to the project card
  projectNameElement.addEventListener("click", () => {
    alert(`Project  ${projectName}  was clicked`);
    // Add your code here to handle the click event
  });

  deleteProjectIcon.addEventListener("click", () => {
    projectCard.remove();
  });
};

// Example usage:
// createProjectCard("Project 1");
// createProjectCard("Project 2");
// createProjectCard("Project 3");
export const renderSidebar = () => {
  sidebarContainer();
};
