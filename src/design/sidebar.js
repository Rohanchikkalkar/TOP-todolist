import "../styles.css";
import addProject from "../images/addIcon.png";
import deleteProject from "../images/deleteIcon.png";
import { displayTasks, showNewProjectDialog } from "./dialog";
import { projectView } from "./content";
import { projectManager } from "../classes";

// import { CURRENT_PROJECT } from "./dialog.js";

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

export const createProjectCard = (project) => {
  const projectCard = document.createElement("div");
  projectCard.classList.add("projectCard");

  const projectNameElement = document.createElement("p");
  projectNameElement.classList.add("projectName");
  projectNameElement.textContent = project;

  const deleteProjectIcon = document.createElement("img");
  deleteProjectIcon.classList.add("deleteProjectIcon");
  deleteProjectIcon.src = deleteProject;
  deleteProjectIcon.alt = `delete project Icon`;

  projectCard.appendChild(projectNameElement);
  projectCard.appendChild(deleteProjectIcon);
  sidebarContent.appendChild(projectCard);

  // Add event listener to the project card
  projectNameElement.addEventListener("click", () => {
    // const contentContainer = document.querySelector(".content-container");
    // if (contentContainer) {
    //   contentContainer.innerHTML = "";
    //   projectView(project);
    // }
    // const contentContainer = document.querySelector(".content-container");
    // if (contentContainer) {
    //   contentContainer.innerHTML = "";
    //   CURRENT_PROJECT = project;
    //   if (CURRENT_PROJECT.todos && CURRENT_PROJECT.todos.length > 0) {
    //     displayTasks(CURRENT_PROJECT.todos);
    //   } else {
    //     projectView(CURRENT_PROJECT);
    //   }
    // }
    const contentContainer = document.querySelector(".content-container");
    if (contentContainer) {
      contentContainer.innerHTML = "";
      const currentProject = projectManager.getCurrentProject();
      if (currentProject.todos && currentProject.todos.length > 0) {
        // contentContainer.innerHTML = "";
        projectView(currentProject.projectName);
        displayTasks(currentProject.todos);
      } else {
        projectView(currentProject.projectName);
      }
    }
  });

  deleteProjectIcon.addEventListener("click", () => {
    projectCard.remove();
    const contentContainer = document.querySelector(".content-container");
    if (contentContainer) {
      contentContainer.innerHTML = "";
    }
  });
};

export const renderSidebar = () => {
  sidebarContainer();
};
