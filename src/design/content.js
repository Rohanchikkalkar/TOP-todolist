import "../styles.css";
const contentContainer = document.createElement("div");
const mainContent = () => {
  contentContainer.classList.add("content-container");

  document.body.appendChild(contentContainer);
  const welcomeContent = document.createElement("div");
  welcomeContent.classList.add("welcome-content");
  welcomeContent.textContent = `create a new project by clicking the + button or select an existing one to start adding your tasks`;

  contentContainer.appendChild(welcomeContent);
};

export const renderMainContent = () => {
  mainContent();
};
