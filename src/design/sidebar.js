import "../styles.css";
import addProject from "../images/addIcon.png";

const sidebarContainer = () => {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  const sidebarTitle = document.createElement("p");
  sidebarTitle.classList.add("sidebarTitle");
  sidebarTitle.textContent = `My Projects`;

  const addProjectIcon = document.createElement("img");
  addProjectIcon.classList.add("addProjectIcon");
  addProjectIcon.src = addProject;
  addProjectIcon.alt = `add project icon`;

  sidebar.appendChild(sidebarTitle);
  sidebar.appendChild(addProjectIcon);
  document.body.appendChild(sidebar);
};

export const renderSidebar = () => {
  sidebarContainer();
};
