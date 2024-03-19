import "../styles.css";

const mainContent = () => {
  const contentContainer = document.createElement("div");
  contentContainer.classList.add("content-container");

  const welcomeContent = document.createElement("div");
  welcomeContent.classList.add("welcome-content");
  welcomeContent.textContent = `create a new project by clicking the + button or select an existing one to start adding your tasks`;

  contentContainer.appendChild(welcomeContent);
  document.body.appendChild(contentContainer);
};

export const renderMainContent = () => {
  mainContent();
};
