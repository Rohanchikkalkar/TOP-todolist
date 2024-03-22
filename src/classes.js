export class Project {
  constructor(projectName, id) {
    this.projectName = projectName;
    this.id = id;
    this.todos = [];
  }

  addTask(task) {
    this.todos.push(task);
  }
  getTodos() {
    return this.todos;
  }
  deleteTodo(taskId) {
    this.todos = this.todos.filter((task) => task.id !== taskId);
  }
}

export class Tasks {
  constructor(taskName, taskDescription, dueDate, id) {
    this.taskName = taskName;
    this.taskDescription = taskDescription;
    this.dueDate = new Date(dueDate);
    this.completed = false;
    this.id = id;
  }

  getFormattedDueDate() {
    return this.dueDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  markAsIncomplete() {
    this.completed = false;
  }

  markAsCompleted() {
    this.completed = true;
  }
}
//changes made now
// projectManager.js
export class ProjectManager {
  constructor() {
    this.currentProject = null;
  }

  setCurrentProject(project) {
    this.currentProject = project;
  }

  getCurrentProject() {
    return this.currentProject;
  }
}
export const projectManager = new ProjectManager();
