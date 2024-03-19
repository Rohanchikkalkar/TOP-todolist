import "../styles.css";
import logoImg from "../images/Logo.png";

const renderHeader = () => {
  //create header todo
  const header = document.createElement("div");
  header.classList.add("header");

  // create logo
  const logo = document.createElement("img");
  logo.src = logoImg;
  logo.alt = `Todolist logo`;
  logo.classList.add("logoImg");

  header.appendChild(logo);
  document.body.appendChild(header);
};
export default renderHeader;
