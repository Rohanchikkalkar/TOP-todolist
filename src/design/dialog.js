import "../styles.css";
import { Project } from "../classes.js";
import { createProjectCard } from "./sidebar.js";

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

  let PROJECT_ID = 0;
  let projectName = "";
  submitButton.addEventListener("click", () => {
    projectName = input.value;
    console.log(projectName);
    let project = new Project(projectName);
    project.id = PROJECT_ID++;

    //clear input fields
    input.value = "";
    createProjectCard(projectName);
    dialog.close();
    return project;
  });

  dialog.appendChild(input);
  dialog.appendChild(submitButton);
  dialog.appendChild(closeButton);
  dialog.appendChild(form);
  document.body.appendChild(dialog);
  dialog.showModal();
  return dialog;
}

export { showNewProjectDialog };
